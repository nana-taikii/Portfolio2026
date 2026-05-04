import React, { useState, useEffect, useCallback, useMemo, startTransition } from "react";
import ArtsBg from "../../src/assets/img/bg_arts.svg";
import './ArtSection.css';

// Import all images
import Art1 from "../../src/assets/img/img_art1.webp";
import Art2 from "../../src/assets/img/img_art2.webp";
import Art3 from "../../src/assets/img/img_art3.webp";
import Art4 from "../../src/assets/img/img_art4.webp";
import Art5 from "../../src/assets/img/img_art5.webp";
import Art6 from "../../src/assets/img/img_art6.webp";
import Art7 from "../../src/assets/img/img_art7.webp";
import Art8 from "../../src/assets/img/img_art8.webp";
import Art9 from "../../src/assets/img/img_art9.webp";
import Art10 from "../../src/assets/img/img_art10.webp";
import Art11 from "../../src/assets/img/img_art11.webp";
import Art12 from "../../src/assets/img/img_art12.webp";
import Art13 from "../../src/assets/img/img_art13.png";
import Art14 from "../../src/assets/img/img_art14.png";
import Art15 from "../../src/assets/img/img_art15.png";
import Art16 from "../../src/assets/img/img_art17.png";

// Preload all images for instant modal opening
const preloadImages = () => {
  const images = [Art1, Art2, Art3, Art4, Art5, Art6, Art7, Art8, Art9, Art10, Art11, Art12, Art13, Art14, Art15, Art16];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Call preload immediately
if (typeof window !== 'undefined') {
  preloadImages();
}

const panels = [
  { id: 1, row: 1, span: 1, bg: "#e8d5c4", label: "Portrait", desc: "Girl with glasses", img: Art1 },
  { id: 2, row: 1, span: 1, bg: "#d4e8d4", label: "Ice Cream Date", desc: "あなたとアイスクリーム", img: Art2 },
  { id: 3, row: 1, span: 1, bg: "#f5f0e8", label: "Bunny", desc: "Fluffy rabbit", img: Art3 },
  { id: 4, row: 2, span: 2, bg: "#f5e8d0", label: "Happy Day", desc: "幸せな一日", img: Art4 },
  { id: 5, row: 2, span: 1, bg: "#e8d5c4", label: "Black Cat", desc: "Mysterious cat", img: Art5 },
  { id: 6, row: 2, span: 1, bg: "#d0e8f5", label: "Snack Time", desc: "Child eating crackers", img: Art6 },
  { id: 7, row: 3, span: 1, bg: "#e8d4d0", label: "In Love", desc: "You found out I'm in love with someone not you", img: Art7 },
  { id: 8, row: 3, span: 1, bg: "#e0dce8", label: "Close Up", desc: "Soft gaze", img: Art8 },
  { id: 9, row: 4, span: 1, bg: "#f0f0d8", label: "Sunflower Garden", desc: "Sunflowers and a little bird", img: Art9 },
  { id: 10, row: 4, span: 1, bg: "#f0e8e8", label: "Glasses Portrait", desc: "Dark hair with glasses", img: Art10 },
  { id: 11, row: 4, span: 1, bg: "#e0e8f0", label: "Smiling Portrait", desc: "Warm smile", img: Art11 },
  { id: 12, row: 5, span: 2, bg: "#f5e8c8", label: "Food Stand", desc: "日本の食べ物屋台", img: Art12 },
  { id: 13, row: 5, span: 1, bg: "#e8d8c0", label: "Cat & Dog", desc: "Close-up animal friends", img: Art13 },
  { id: 14, row: 6, span: 1, bg: "#e8d5c4", label: "Purple Dragon", desc: "Fantasy creature", img: Art14 },
  { id: 15, row: 6, span: 1, bg: "#f0f5e8", label: "Duck & Blossoms", desc: "Cherry blossom scene", img: Art15 },
  { id: 16, row: 6, span: 1, bg: "#e8e4e0", label: "White Cat", desc: "Peaceful white cat", img: Art16 },
];

// Optimized PanelMedia component
const PanelMedia = React.memo(({ panel, className = "" }) => {
  if (panel.img) {
    return (
      <img
        src={panel.img}
        alt={panel.desc}
        className={`c-arts__media-img ${className}`}
        loading="eager"
        decoding="sync"
      />
    );
  }
  return null;
});

// Optimized panel component
const Panel = React.memo(({ panel, row, onClick }) => (
  <div
    className={`c-arts__flex-panel${row === 3 ? " c-arts__flex-panel--tall" : ""}`}
    style={{
      background: panel.bg,
      flex: panel.span === 2 ? '2' : '1',
      minWidth: panel.span === 2 ? '200px' : '100px',
    }}
    onClick={() => onClick(panel)}
  >
    <div className="c-arts__flex-panel-inner">
      <PanelMedia panel={panel} />
    </div>
    <div className="c-arts__flex-panel-label">
      <p>{panel.label}</p>
    </div>
  </div>
));

const Row = React.memo(({ row, panels, onPanelClick }) => (
  <div className={`c-arts__flex-row c-arts__flex-row--${row}`}>
    {panels.map(panel => (
      <Panel key={panel.id} panel={panel} row={row} onClick={onPanelClick} />
    ))}
  </div>
));

const ArtsSection = () => {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const [closing, setClosing] = useState(false);

  const panelsByRow = useMemo(() => {
    const rows = {};
    for (let i = 1; i <= 6; i++) {
      rows[i] = panels.filter(p => p.row === i);
    }
    return rows;
  }, []);

  // Instant modal opening - no delays
  const openModal = useCallback((panel) => {
    const index = panels.findIndex(p => p.id === panel.id);
    
    // Use startTransition for smoother rendering
    startTransition(() => {
      setCurrent(index);
      setSelected(panel);
      setClosing(false);
    });
    
    setAnimating(false);
    setDirection(1);
  }, []);

  const closeModal = useCallback(() => {
    // Start closing animation
    setClosing(true);
    
    // Wait for animation to complete before removing modal
    setTimeout(() => {
      setSelected(null);
      setClosing(false);
      setAnimating(false);
    }, 250);
  }, []);

  const navigate = useCallback((newDirection) => {
    if (animating) return;
    
    setAnimating(true);
    setDirection(newDirection);
    
    const nextIndex = (current + newDirection + panels.length) % panels.length;
    
    requestAnimationFrame(() => {
      setCurrent(nextIndex);
      setSelected(panels[nextIndex]);
      
      setTimeout(() => {
        setAnimating(false);
      }, 250);
    });
  }, [animating, current]);

  useEffect(() => {
    const handler = (e) => {
      if (!selected) return;
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, navigate, closeModal]);

  const getSlideClass = useCallback(() => {
    if (!animating) return "";
    return direction > 0 ? "c-arts__modal-slide--enter-right" : "c-arts__modal-slide--enter-left";
  }, [animating, direction]);

  return (
    <section id = 'arts' className="c-arts-section">
      <div className="c-arts-section__wrapper">
        <img src={ArtsBg} className="c-arts__bg" alt="" loading="eager" />
        <h2 className = 'reveal'>My Arts</h2>
      </div>

      <div className="c-arts__root">
        <div className="c-arts__flex-container">
          {[1, 2, 3, 4, 5, 6].map(row => (
            <Row
              key={row}
              row={row}
              panels={panelsByRow[row]}
              onPanelClick={openModal}
            />
          ))}
        </div>

        {selected && (
          <div 
            className={`c-arts__modal-bg ${closing ? 'c-arts__modal-bg--closing' : ''}`} 
            onClick={closeModal}
          >
            <div 
              className={`c-arts__modal-card ${closing ? 'c-arts__modal-card--closing' : ''}`} 
              onClick={e => e.stopPropagation()}
            >
              <div className="c-arts__modal-header">
                <span className="c-arts__modal-counter">{current + 1} / {panels.length}</span>
                <button className="c-arts__close-btn" onClick={closeModal}>✕</button>
              </div>

              <div className="c-arts__modal-stage" style={{ background: selected.bg }}>
                <div
                  key={selected.id}
                  className={`c-arts__modal-slide ${getSlideClass()}`}
                >
                  <PanelMedia panel={selected} className="c-arts__modal-media" />
                </div>
                <button
                  className="c-arts__nav-btn c-arts__nav-btn--prev"
                  onClick={() => navigate(-1)}
                  disabled={animating}
                >
                  ‹
                </button>
                <button
                  className="c-arts__nav-btn c-arts__nav-btn--next"
                  onClick={() => navigate(1)}
                  disabled={animating}
                >
                  ›
                </button>
              </div>

              <div className="c-arts__modal-info">
                <p className="c-arts__modal-title">{selected.label}</p>
              </div>

              <div className="c-arts__dots">
                {panels.map((_, i) => (
                  <div
                    key={i}
                    className={`c-arts__dot${i === current ? " c-arts__dot--active" : ""}`}
                    onClick={() => {
                      if (!animating) {
                        startTransition(() => {
                          setCurrent(i);
                          setSelected(panels[i]);
                        });
                      }
                    }}
                  />
                ))}
              </div>

              <div className="c-arts__thumb-strip">
                {panels.map((p, i) => (
                  <div
                    key={p.id}
                    className={`c-arts__thumb${i === current ? " c-arts__thumb--active" : ""}`}
                    style={{ background: p.bg }}
                    onClick={() => {
                      if (!animating) {
                        startTransition(() => {
                          setCurrent(i);
                          setSelected(p);
                        });
                      }
                    }}
                  >
                    <div className="c-arts__thumb-inner">
                      <PanelMedia panel={p} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="c-arts__modal-spacer" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtsSection;