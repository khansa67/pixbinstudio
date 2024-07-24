import React, { useState, useEffect } from "react";
import "./ImageGallery.css";
import Navbar from "../pages/navbar/Navbar";

const images = [
  "https://pixbinstudios.com/wp-content/uploads/2022/07/full-shot-travel-concept-with-landmarks.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/dee-copper-and-wild-XJBC_7VY37k-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/charming-relaxed-gentle-young-woman.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/fashionable-spacious-apartment-with-stylish-design-green-grey-white-pastel-colors-with-big-window-decorative-walls-bedroom-kitchen-space_267786-383.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/portrait-beautiful-blonde-barbie-woman-perfect-makeup-tongue-sexy-licking-lip-donuts-earrings.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/sebastian-banasiewcz-CMs6ZGOdyho-unsplash.jpg",
];

const images2 = [
  "https://pixbinstudios.com/wp-content/uploads/2022/10/blurred-silhouette-man-looking-aside_most-scaled-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/interior-concept-memphis-design-colorful-armchair-with-console-prop-3d-render_156429-415.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/cement-street-financial-downtown-shanghai-travel.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/rachit-tank-2cFZ_FB08UM-unsplash-scaled-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1040353575.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/image_processing20210930-18333-14vogmf.png",
];

const images3 = [
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1040353575.jpg", // Image 1 (700px)
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1052039207.jpg", // Image 2 (700px)
  "https://pixbinstudios.com/wp-content/uploads/2022/08/c-d-x-PDX_a_82obo-unsplash.jpg", // Image 3 (250px)
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4361436.jpg", // Image 4 (250px)
  "https://pixbinstudios.com/wp-content/uploads/2022/08/sebastian-banasiewcz-CMs6ZGOdyho-unsplash.jpg", // Image 5 (500px)
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4173877.jpg", // Image 6 (500px)
  "https://pixbinstudios.com/wp-content/uploads/2022/08/alex-sh-ZsAfhWL6l3c-unsplash.jpg", // Image 7 (250px)
  "https://pixbinstudios.com/wp-content/uploads/2022/08/vishwajeet-nishad-pc21vhOv-Uo-unsplash.jpg", // Image 8 (500px)
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGallery, setCurrentGallery] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? "hidden" : "auto";
  }, [selectedImage]);

  const handleImageClick = (index, gallery) => {
    setSelectedImage(index);
    setCurrentGallery(gallery);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setCurrentGallery(null);
  };

  const handlePrevImage = () => {
    if (currentGallery === "images1") {
      setSelectedImage(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    } else {
      setSelectedImage(
        (prevIndex) => (prevIndex - 1 + images2.length) % images2.length
      );
    }
  };

  const handleNextImage = () => {
    if (currentGallery === "images1") {
      setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setSelectedImage((prevIndex) => (prevIndex + 1) % images2.length);
    }
  };

  const getImageSrc = () => {
    if (currentGallery === "images1") {
      return images[selectedImage];
    } else {
      return images2[selectedImage];
    }
  };

  const getImageCount = () => {
    if (currentGallery === "images1") {
      return `${selectedImage + 1} of ${images.length}`;
    } else {
      return `${selectedImage + 1} of ${images2.length}`;
    }
  };

  return (
    <>
        <div className="nav"><Navbar/></div>
    <div className="image-gallery">
      {/* FIRST GALLERY */}

      <div className="div1">
        <span className="image-span">GALLERY WIDGET</span>
        <h2 className="image-h2">Branding</h2>
      </div>

      <div className="images">
        {images.map((src, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => handleImageClick(index, "images1")}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="image-navigation">
              <button className="prev" onClick={handlePrevImage}>
                &#10094;
              </button>
              <img
                src={getImageSrc()}
                alt={`Zoomed ${selectedImage + 1}`}
                className="zoomed-image"
              />
              <button className="next" onClick={handleNextImage}>
                &#10095;
              </button>
            </div>
            <div className="image-count">{getImageCount()}</div>
          </div>
        </div>
      )}

      {/* SECOND GALLERY */}

      <div className="images-2">
        <div className="div2">
          <span className="image-span span2">GALLERY WIDGET</span>
          <h2 className="image-h2 h2-2">UI/UX</h2>
        </div>

        <div className="image-row">
          <div
            className="image-item"
            style={{ flex: "0 0 20%" }}
            onClick={() => handleImageClick(0, "images2")}
          >
            <img src={images2[0]} alt="Gallery 2 - 1" />
          </div>
          <div
            className="image-item"
            style={{ flex: "0 0 40%" }}
            onClick={() => handleImageClick(1, "images2")}
          >
            <img src={images2[1]} alt="Gallery 2 - 2" />
          </div>
          <div
            className="image-item"
            style={{ flex: "0 0 40%" }}
            onClick={() => handleImageClick(2, "images2")}
          >
            <img src={images2[2]} alt="Gallery 2 - 3" />
          </div>
        </div>
        <div className="image-row">
          <div className="image-item" style={{ flex: "0 0 40%" }}>
            <img
              src={images2[3]}
              alt="Gallery 2 - 4"
              style={{
                height: "300px",
                borderRadius: "30px",
                objectFit: "cover",
              }}
              onClick={() => handleImageClick(3, "images2")}
            />
          </div>
          <div
            className="image-item"
            style={{ flex: "0 0 20%" }}
            onClick={() => handleImageClick(4, "images2")}
          >
            <img src={images2[4]} alt="Gallery 2 - 5" />
          </div>
          <div
            className="image-item"
            style={{ flex: "0 0 40%" }}
            onClick={() => handleImageClick(5, "images2")}
          >
            <img src={images2[5]} alt="Gallery 2 - 6" />
          </div>
        </div>
      </div>

      {/* THIRD GALLERY */}

      <div className="images-3">
        <div className="div1">
          <span className="image-span">GALLERY WIDGET</span>
          <h2 className="image-h2">Branding</h2>
        </div>

        <div className="images-col">
          <div className="column">
            <div className="image-wrapper">
              <div
                className="image"
                style={{
                  height: "600px",
                  backgroundImage: `url(${images3[0]})`,
                }}
              ></div>
            </div>
            <div className="image-wrapper">
              <div
                className="image"
                style={{
                  height: "600px",
                  backgroundImage: `url(${images3[1]})`,
                }}
              ></div>
            </div>
          </div>
          <div className="column">
            <div className="image-wrapper">
              <div
                className="image"
                style={{
                  height: "250px",
                  backgroundImage: `url(${images3[2]})`,
                }}
              ></div>
            </div>
            <div className="image-wrapper">
              <div
                className="image"
                style={{
                  height: "600px",
                  backgroundImage: `url(${images3[3]})`,
                }}
              ></div>
            </div>
            <div className="image-wrapper">
              <div
                className="image"
                style={{
                  height: "250px",
                  backgroundImage: `url(${images3[4]})`,
                }}
              ></div>
            </div>
          </div>
          <div className="column">
            <div className="image-wrapper">
              <div
                className="image"
                style={{
                  height: "250px",
                  backgroundImage: `url(${images3[5]})`,
                }}
              ></div>
            </div>
            <div className="image-wrapper">
              <div
                className="image"
                style={{
                  height: "500px",
                  backgroundImage: `url(${images3[6]})`,
                }}
              ></div>
            </div>
            <div className="image-wrapper">
              <div
                className="image"
                style={{
                  height: "500px",
                  backgroundImage: `url(${images3[7]})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ImageGallery;
