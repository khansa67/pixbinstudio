import React, { useState } from "react";
import "./RandomRisk.css";
import NextPage from "../pages/NextPage/NextPage"
import Lightbox from "./Lightbox";
import Navbar from "../pages/navbar/Navbar";
const pic1 = [
  "https://pixbinstudios.com/wp-content/uploads/2022/10/most_team_4_2.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1036091890.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/most_slide_3.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1036415740.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-199673261.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/most_team_6_2.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/blurred-silhouette-man-looking-aside_most-scaled-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/most_team_3_2.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-176343593.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/11/stock-photo-1040234435.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/cement-street-financial-downtown-shanghai-travel.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/back-view-content-creator-working-home-office-during-night-time-video-editor-home-office-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4361436.jpg",
];

const RandomRisk = () => {
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
    <div className="themePage">
      <div className="intro">
        <h1>STREAM SHOP</h1>
      </div>
      <div className="description">
        <p>
          Globally morph real-time e-business with optimal users. Dramatically{" "}
          <br />
          extend high-payoff infomediaries through integrated experiences.
        </p>
      </div>

      <div className="container">
        <div className="commitment-left">
          <h3 className="left">CLIENT:</h3>
          <span className="left-span">ThemeForest</span>
        </div>

        <div className="commitment-right">
          <h3 className="right">PARTNERS:</h3>
          <span className="right-span">Envato</span>
        </div>
      </div>

      {/* images */}
      <div className="columns-container">
        <div className="column">
          <img
            src={pic1[0]}
            alt="Pic 1"
            className="large-image column-image"
            onClick={() => openLightbox(0)}
          />
          <img
            src={pic1[1]}
            alt="Pic 2"
            className="medium-image column-image"
            onClick={() => openLightbox(1)}
          />
          <img
            src={pic1[2]}
            alt="Pic 3"
            className="small-image column-image"
            onClick={() => openLightbox(2)}
          />
          <img
            src={pic1[3]}
            alt="Pic 4"
            className="medium-large-image column-image"
            onClick={() => openLightbox(3)}
          />
        </div>

        <div className="column">
          <img
            src={pic1[4]}
            alt="Pic 5"
            className="medium-pic column-image"
            onClick={() => openLightbox(4)}
          />
          <img
            src={pic1[5]}
            alt="Pic 6"
            className="large-pic column-image"
            onClick={() => openLightbox(5)}
          />
          <img
            src={pic1[6]}
            alt="Pic 7"
            className="large-pic column-image"
            onClick={() => openLightbox(6)}
          />
        </div>

        <div className="column">
          <img
            src={pic1[7]}
            alt="Pic 8"
            className="large-pictures column-image"
            onClick={() => openLightbox(7)}
          />
          <img
            src={pic1[8]}
            alt="Pic 9"
            className="small-pictures column-image"
            onClick={() => openLightbox(8)}
          />
          <img
            src={pic1[9]}
            alt="Pic 10"
            className="small-pictures column-image"
            onClick={() => openLightbox(9)}
          />
          <img
            src={pic1[10]}
            alt="Pic 11"
            className="medium-large-pictures column-image"
            onClick={() => openLightbox(10)}
          />
          <img
            src={pic1[11]}
            alt="Pic 12"
            className="small-pictures column-image"
            onClick={() => openLightbox(11)}
          />
        </div>
      </div>

      {/* Using NextPage Component */}
      <NextPage  link='/portfolio/test-portfolio'image={pic1[12]} title="TEST PORTFOLIO SWAP" />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={pic1}
          onClose={closeLightbox}
          selectedIndex={selectedImageIndex}
        />
      )}
    </div></>
  );
};

export default RandomRisk;
