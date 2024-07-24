import React, { useState } from "react";
import "./ColorCurrent.css";
import NextPage from "../pages/NextPage/NextPage"
import Lightbox from "./Lightbox";
import Navbar from "../pages/navbar/Navbar";

const pic2 = [
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-199673261.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/portrait-beautiful-blonde-barbie-woman-perfect-makeup-tongue-sexy-licking-lip-donuts-earrings.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/alex-sh-ZsAfhWL6l3c-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4173877.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/interior-concept-memphis-design-colorful-armchair-with-console-prop-3d-render_156429-415.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/sebastian-banasiewcz-CMs6ZGOdyho-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1040353575.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1036415740.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/rachit-tank-2cFZ_FB08UM-unsplash-scaled-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/vishwajeet-nishad-pc21vhOv-Uo-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4361436.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/cement-street-financial-downtown-shanghai-travel.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1040353575.jpg",
];

const ColorCurrent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (<>
    <div className="nav"><Navbar/></div>
    <div className="3pages">
      <div className="pages-intro">
        <h1>COLOR CURRENT</h1>
      </div>

      <hr />

      <div className="pages-container">
        <div className="Pages-left">
          <h3 className="left-3">Description:</h3>
        </div>
        <div className="Pages-right">
          <p className="right-3">
            Rapidiously deliver synergistic benefits rather than synergistic
            intellectual capital. Globally grow cooperative portals through
            backward-compatible e-commerce.
          </p>
        </div>
      </div>

      {/*Pictures*/}
      <div className="picture-container">
        <img src={pic2[0]} alt="Full Width" className="full-width-image" />
      </div>

      {/* Columns */}
      <div className="columns-container">
        <div className="column">
          <img
            src={pic2[1]}
            alt="Pic 1"
            className="column-images"
            onClick={() => openLightbox(1)}
          />
          <img
            src={pic2[2]}
            alt="Pic 2"
            className="column-images"
            onClick={() => openLightbox(2)}
          />
          <img
            src={pic2[3]}
            alt="Pic 3"
            className="column-images"
            onClick={() => openLightbox(3)}
          />
          <img
            src={pic2[4]}
            alt="Pic 4"
            className="column-images"
            onClick={() => openLightbox(4)}
          />
        </div>

        <div className="column">
          <img
            src={pic2[5]}
            alt="Pic 5"
            className="column-images"
            onClick={() => openLightbox(5)}
          />
          <img
            src={pic2[6]}
            alt="Pic 6"
            className="column-images"
            onClick={() => openLightbox(6)}
          />
          <img
            src={pic2[7]}
            alt="Pic 7"
            className="column-images"
            onClick={() => openLightbox(7)}
          />
          <img
            src={pic2[8]}
            alt="Pic 8"
            className="column-images"
            onClick={() => openLightbox(8)}
          />
        </div>

        <div className="column">
          <img
            src={pic2[9]}
            alt="Pic 9"
            className="column-images "
            onClick={() => openLightbox(9)}
          />
          <img
            src={pic2[10]}
            alt="Pic 10"
            className="column-images "
            onClick={() => openLightbox(10)}
          />
          <img
            src={pic2[11]}
            alt="Pic 11"
            className="column-images "
            onClick={() => openLightbox(11)}
          />
        </div>
      </div>

      <NextPage  link = '/portfolio/justicde-robot' image={pic2[12]} title="justice robot" />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={pic2}
          onClose={closeLightbox}
          selectedIndex={selectedImageIndex}
        />
      )}
    </div> </>
  );
};

export default ColorCurrent;
