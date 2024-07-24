import React, { useState } from "react";
import "./FreezingBirthday.css";
import NextPage from "../pages/NextPage/NextPage"
import Lightbox from "./Lightbox";
import Navbar from "../pages/navbar/Navbar";

const pic4 = [
  "https://pixbinstudios.com/wp-content/uploads/2022/08/portrait-beautiful-blonde-barbie-woman-perfect-makeup-tongue-sexy-licking-lip-donuts-earrings.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1052039207.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4173877.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/cement-street-financial-downtown-shanghai-travel.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/sebastian-banasiewcz-CMs6ZGOdyho-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/alex-sh-ZsAfhWL6l3c-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1036415740.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/rachit-tank-2cFZ_FB08UM-unsplash-scaled-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/vishwajeet-nishad-pc21vhOv-Uo-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4361436.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/interior-concept-memphis-design-colorful-armchair-with-console-prop-3d-render_156429-415.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1040353575.jpg",
];

const pic5 = [
  "https://theme.madsparrow.me/most/wp-content/uploads/2022/08/stock-photo-176343593.jpg",
];

const FreezingBirthday = () => {

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
        <h1>FREEZING BIRTHDAY</h1>
      </div>

      <hr />

      <div className="pages-container">
        <div className="Pages-left">
          <h3 className="left-3">Description:</h3>
        </div>
        <div className="Pages-right">
          <p className="right-3">
            Interactively coordinate synergistic solutions via user friendly
            sources. Completely reconceptualize maintainable services before
            inexpensive action items. Enthusiastically e-enable dynamic
            functionalities rather than fully researched outsourcing.
            web-readiness.
          </p>
        </div>
      </div>

      {/* First row */}

      <div className="pixtures">
        <img src={pic5[0]} alt="Pic 1" className="large-image3 " />
      </div>

      {/* Image grid */}
      <div className="image-grid">
        {pic4.map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={`Pic ${index + 1}`}
            className=" image-column"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      {/* Using NextPage Component */}
      <NextPage link='/portfolio/test-portfolio' image={pic4[1]} title="TEST PORTFOLIO SWAP" />

       {/* Lightbox */}
       {lightboxOpen && (
        <Lightbox
          images={pic4 }
          onClose={closeLightbox}
          selectedIndex={selectedImageIndex}
        />
      )}
    </div></>
  );
};

export default FreezingBirthday;
