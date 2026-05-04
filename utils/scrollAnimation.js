
let observer = null;

// Initialize the reveal animation on all elements with 'reveal' class
export const initRevealAnimation = (options = {}) => {
  const defaultOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
    once: true // Only animate once
  };

  const config = { ...defaultOptions, ...options };

  // Clean up existing observer if any
  if (observer) {
    observer.disconnect();
  }

  // Create new observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        if (config.once) {
          observer.unobserve(entry.target);
        }
      } else if (!config.once) {
        entry.target.classList.remove('reveal-visible');
      }
    });
  }, {
    threshold: config.threshold,
    rootMargin: config.rootMargin
  });

  // Observe all existing elements with 'reveal' class
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(element => {
    observer.observe(element);
  });

  return observer;
};

// Watch for dynamically added elements with 'reveal' class
export const watchForNewRevealElements = () => {
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          // Check if the added node itself has 'reveal' class
          if (node.classList && node.classList.contains('reveal')) {
            if (observer) observer.observe(node);
          }
          // Check for children with 'reveal' class
          if (node.querySelectorAll) {
            const revealChildren = node.querySelectorAll('.reveal');
            revealChildren.forEach(child => {
              if (observer) observer.observe(child);
            });
          }
        }
      });
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  return mutationObserver;
};

// Clean up function
export const destroyRevealAnimation = () => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
};

// Manually refresh - useful after dynamic content updates
export const refreshRevealAnimation = () => {
  if (observer) {
    const revealElements = document.querySelectorAll('.reveal:not(.reveal-visible)');
    revealElements.forEach(element => {
      observer.observe(element);
    });
  }
};