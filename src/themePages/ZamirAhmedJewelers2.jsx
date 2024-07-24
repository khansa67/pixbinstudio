import React ,{useState} from "react";
import "./ZamirAhmedJewelers2.css";
import Page from "./page"
import Lightbox from "./Lightbox";
import Navbar from "../pages/navbar/Navbar";
const pics = [
  "https://pixbinstudios.com/wp-content/uploads/2022/10/back-view-content-creator-working-home-office-during-night-time-video-editor-home-office-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-199673261.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/11/stock-photo-1040234435.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/most_team_6_2.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/most_team_4_2.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/most_slide_3.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-176343593.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/blurred-silhouette-man-looking-aside_most-scaled-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/10/most_team_3_2.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1036415740.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1036091890.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-3-scaled.jpg",
];

const ZamirAhmedJewelers2 = () => {

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
        <h1>SUBSEQUENT SNEEZE</h1>
      </div>
      <div className="description">
        <p>
          Phosfluorescently underwhelm cooperative materials and out-of- <br />
          the-box niche markets. Intrinsicly existing experiences after <br />
          proactive initiatives.
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

      {/*Pictures*/}

      <div className="images-row">
        {pics.slice(0, 2).map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Pic ${index + 1}`}
            className="image-z common"
            onClick={() => openLightbox(index)} 
          />
        ))}
      </div>

      <div className="single-image-row " >
        <img src={pics[2]} alt="Pic 3" className="large-image2 common"  onClick={() => openLightbox(2)}  />
      </div>

      <div className="third-row">
        {pics.slice(3, 6).map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Pic ${index + 4}`}
            className={` common third-image ${index < 2 ? "small" : "large"}`}
            onClick={() => openLightbox(index + 3)}
          />
        ))}
      </div>

      <div className="fourth-row">
        {pics.slice(6, 9).map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Pic ${index + 7}`}
            className={` common fourth-image ${index === 0 ? "large" : "small"}`}
            onClick={() => openLightbox(index + 6)}
          />
        ))}
      </div>

      <div className="fifth-row">
        {pics.slice(9, 11).map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Pic ${index + 10}`}
            className="fifth-image common"
            onClick={() => openLightbox(index + 9)} 
          />
        ))}
      </div>

      <Page 
      link='/portfolio/zamir-ahmed-jewelers'
        imageUrl={pics[11]} 
        title="Zamir Ahmed Jewelers" 
      />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={pics}
          onClose={closeLightbox}
          selectedIndex={selectedImageIndex}
        />
      )}

    </div></>
  );
};

export default ZamirAhmedJewelers2;
