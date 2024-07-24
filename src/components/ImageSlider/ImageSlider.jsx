import React, { useState, useRef, useEffect } from 'react';
import './ImageSlider.css';
import LightBox from '../../themePages/Lightbox'; // Adjust the import path if necessary
import Lightbox from '../../themePages/Lightbox';

const imageSources = [
  "https://pixbinstudios.com/wp-content/uploads/2022/08/1212.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/1802.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/114.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/702.jpg"
];

const ImageSlider = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const containerRef = useRef(null);
  const txtRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const txtElement = txtRef.current;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const txtRect = txtElement.getBoundingClientRect();

      // If the bottom of the container is less than the bottom of the viewport, switch to relative positioning
      if (containerRect.bottom < txtRect.bottom) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="content">
      <div
        className={`txt ${!isSticky ? 'relative' : ''}`}
        ref={txtRef}
      >
        <h1>ENTHUSIASTICALLY EXTEND</h1>
        <p>
          Dynamically empower parallel data whereas value-added human capital.<br />
          Distinctively initiate process-centric experiences before go forward infrastructures.<br />
          Authoritatively transform customer directed convergence whereas end-to-end <br />
          sources. Assertively drive leveraged technology for mission-critical synergy.<br />
          Enthusiastically reconceptualize user-centric services for prospective<br />
          convergence.
        </p>
      </div>
      <div className="txt-img" ref={containerRef}>
        {imageSources.map((src, index) => (
          <div className={`ig${index + 1}`} key={index}>
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              onClick={() => openLightbox(index)} 
            />
          </div>
        ))}
      </div>
      
  {lightboxOpen && (
        <Lightbox
          images={imageSources}
          onClose={closeLightbox}
          selectedIndex={selectedImageIndex}
        />
      )}
    </section>
  );
};

export default ImageSlider;
