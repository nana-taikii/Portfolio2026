// Stars.jsx
import React, { useEffect, useRef } from 'react';
import './Stars.css'; // or however you import your CSS

const Stars = () => {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    const sizes = [1, 1, 2, 3, 4];
    
    const randomPosition = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    // Get the container element
    const container = starsContainerRef.current;
    if (!container) return;
    
    // Clear any existing stars
    const existingStars = container.querySelectorAll('.star1, .star2, .star3, .star4, .star5, .star6');
    existingStars.forEach(star => star.remove());
    
    const fragment = document.createDocumentFragment();
    const stars = [];
    
    for (let i = 0; i < 150; i++) {
      const top = randomPosition(1, 100);
      const left = randomPosition(1, 100);
      const random = Math.floor(Math.random() * sizes.length);
      const randomSize = sizes[random];
      
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.top = top + '%';
      star.style.left = left + '%';
      star.style.height = randomSize + 'px';
      star.style.width = randomSize + 'px';
      star.style.backgroundColor = '#FFFFFF';
      star.style.borderRadius = '50%';
      star.style.pointerEvents = 'none'; // Prevent interaction
      star.style.zIndex = '1';
      
      // Assign animation classes based on index
      if (i <= 50) {
        star.classList.add('star1');
      } else if (i <= 100) {
        star.classList.add('star2');
      } else if (i <= 150) {
        star.classList.add('star3');
      } else if (i <= 200) {
        star.classList.add('star4');
      } else if (i <= 250) {
        star.classList.add('star5');
      } else {
        star.classList.add('star6');
      }
      
      stars.push(star);
      fragment.appendChild(star);
    }
    
    container.appendChild(fragment);
    
    // Cleanup
    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);
  
  return (
    <div className="stars-wrapper" ref={starsContainerRef}>
      <div className="light"></div>
    </div>
  );
};

export default Stars;