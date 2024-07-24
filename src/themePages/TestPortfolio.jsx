import React, { useState } from "react";
import "./TestPortfolio.css";
import NextPage from "../pages/NextPage/NextPage";
import Lightbox from "./Lightbox";
import Navbar from "../pages/navbar/Navbar";

const pic3 = [
  "https://theme.madsparrow.me/most/wp-content/uploads/2022/08/stock-photo-1036091890.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/portrait-beautiful-blonde-barbie-woman-perfect-makeup-tongue-sexy-licking-lip-donuts-earrings.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/sebastian-banasiewcz-CMs6ZGOdyho-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/vishwajeet-nishad-pc21vhOv-Uo-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1040353575.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/alex-sh-ZsAfhWL6l3c-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4361436.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4173877.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1036415740.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/interior-concept-memphis-design-colorful-armchair-with-console-prop-3d-render_156429-415.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/cement-street-financial-downtown-shanghai-travel.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/rachit-tank-2cFZ_FB08UM-unsplash-scaled-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4173877.jpg",
];

const TestPortfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <div className="nav"><Navbar/></div>
      <div className="3pages">
        <div className="pages-intro">
          <h1>SHARE SPARK</h1>
        </div>

        <hr />

        <div className="pages-container">
          <div className="Pages-left">
            <h3 className="left-3">Description:</h3>
          </div>
          <div className="Pages-right">
            <p className="right-3">
              Quickly develop corporate systems vis-a-vis team building human
              capital. Compellingly repurpose robust results via bricks-and-clicks
              ROI. Credibly optimize high-payoff ideas and impactful
              web-readiness.
            </p>
          </div>
        </div>

        {/* First row */}
        <div className="pixtures">
          <img src={pic3[0]} alt="Pic 1" className="large-image1" />
        </div>

        {/* Second row */}
        <div className="pictures second-row">
          <div className="picture-container">
            <img
              src={pic3[1]}
              alt="Pic 2"
              className="image-half column-imagez common"
              onClick={() => openLightbox(1)}
            />
          </div>
          <div className="picture-container">
            <img
              src={pic3[2]}
              alt="Pic 3"
              className="image-half column-imagez common"
              onClick={() => openLightbox(2)}
            />
          </div>
        </div>

        {/* Third row */}
        <div className="pictures">
          <div className="five-pics column-imagez" style={{ width: "16%" }}>
            <img
              src={pic3[3]}
              alt="Pic 5"
              className="image-small common"
              onClick={() => openLightbox(3)}
            />
          </div>
          <div className="five-pics column-imagez" style={{ width: "16%" }}>
            <img
              src={pic3[4]}
              alt="Pic 6"
              className="image-small common"
              onClick={() => openLightbox(4)}
            />
          </div>
          <div className="five-pics column-imagez" style={{ width: "16%" }}>
            <img
              src={pic3[5]}
              alt="Pic 7"
              className="image-small common"
              onClick={() => openLightbox(5)}
            />
          </div>
          <div className="five-pics column-imagez" style={{ width: "16%" }}>
            <img
              src={pic3[6]}
              alt="Pic 8"
              className="image-small common"
              onClick={() => openLightbox(6)}
            />
          </div>
          <div className="five-pics column-imagez" style={{ width: "28%" }}>
            <img
              src={pic3[7]}
              alt="Pic 9"
              className="image-large common"
              onClick={() => openLightbox(7)}
            />
          </div>
        </div>

        {/* Fourth row */}
        <div className="pictures fourth-row">
          <div className="picture-container">
            <img
              src={pic3[8]}
              alt="Pic 9"
              className="image-half column-imagez common"
              onClick={() => openLightbox(8)}
            />
          </div>
          <div className="picture-container">
            <img
              src={pic3[9]}
              alt="Pic 10"
              className="image-half column-imagez common"
              onClick={() => openLightbox(9)}
            />
          </div>
        </div>


        {/* Using NextPage Component */}
        <NextPage link='/portfolio/wiggly-finger' image={pic3[12]} title="Wiggly finger" />

        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            images={pic3}
            onClose={closeLightbox}
            selectedIndex={selectedImageIndex}
          />
        )}
      </div>
    </>
  );
};

export default TestPortfolio;
