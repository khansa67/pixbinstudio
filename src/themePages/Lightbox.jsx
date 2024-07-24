import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Lightbox.css";

const Lightbox = ({ images, onClose, selectedIndex }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(selectedIndex);

  useEffect(() => {
    setCurrentImageIndex(selectedIndex); // Update currentImageIndex on selectedIndex change
  }, [selectedIndex]);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="lightbox-overlay">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <div className="lightbox-content">
        <img
          src={images[currentImageIndex]}
          alt={`Pic ${currentImageIndex + 1}`}
          className="lightbox-image"
        />
        <div className="lightbox-controls">
          <span className="prev-btn" onClick={goToPrevious}>
            &#8249;
          </span>
          <span className="next-btn" onClick={goToNext}>
            &#8250;
          </span>
          <div className="image-counter">
            {currentImageIndex + 1} of {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};

export default Lightbox;
