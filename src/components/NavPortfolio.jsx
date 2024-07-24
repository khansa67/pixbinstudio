import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import portfolio from "../assets/portfolio.png";
import NavPortfolio from "./NavPortfolio";
import Navbar from "../pages/navbar/Navbar";

const images3 = [
  "https://pixbinstudios.com/wp-content/uploads/2022/08/c-d-x-PDX_a_82obo-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/alex-sh-ZsAfhWL6l3c-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4173877.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/image_processing20210930-18333-14vogmf.png",
  "https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-3-1120x630.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1052039207.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/c-d-x-PDX_a_82obo-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/rachit-tank-2cFZ_FB08UM-unsplash-scaled-1.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/vishwajeet-nishad-pc21vhOv-Uo-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4361436.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1040353575.jpg",
];

const imageData = [
  { id: 1, height: 300, title: "ZAMIR AHMED JEWELERS 2", desc: "DESIGN", route: "zamir-ahmed-jewelers2" },
  { id: 2, height: 500, title: "RANDOM RISK", desc: "PHOTO", route: "random-risk" },
  { id: 3, height: 300, title: "WIGGLY FINGER", desc: "CREATIVE", route: "wiggly-finger" },
  { id: 4, height: 300, title: "COLOR CURRENT", desc: "PHOTO", route: "color-current" },
  { id: 5, height: 300, title: "ZAMIR AHMED JEWELERS", route: "zamir-ahmed-jewelers" },
  { id: 6, height: 600, title: "STREAM SHOP", desc: "DESIGN", route: "stream-shop" },
  { id: 7, height: 300, title: "SUBSEQUENT SNEEZE", desc: "DESIGN", route: "zamir-ahmed-jewelers2" },
  { id: 8, height: 300, title: "THE DARK SIDE", desc: "CREATIVE", route: "dark-side" },
  { id: 9, height: 500, title: "FREEZING BIRTHDAY", desc: "CREATIVE", route: "freezing-birthday" },
  { id: 10, height: 600, title: "TEST PORTFOLIO SWAP", desc: "STYLE", route: "test-portfolio" },
  { id: 11, height: 600, title: "JUSTICE ROBOT", desc: "STYLE", route: "justice-robot" },
];

const Portfolio = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [rotating, setRotating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setLoadMore(false); // Reset load more on category change
  };

  const handleLoadMore = () => {
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
      setLoadMore(true);
    }, 1000); // 1 second
  };

  // Filter images based on the selected category
  const filteredImageData = imageData.filter(image =>
    selectedCategory === 'All Categories' || image.desc === selectedCategory
  );

  // Generate image components
  const renderImages = (startIndex, endIndex) => {
    return filteredImageData.slice(startIndex, endIndex).map((data, index) => (
      <div className="image-wrapper" key={data.id}>
        <Link to={`/portfolio/${data.route}`} className="image-link">
          <div
            className="image"
            style={{
              height: `${data.height}px`,
              backgroundImage: `url(${images3[startIndex + index]})`,
            }}
          >
            <div className="image-overlay">
              <h2>{data.title}</h2>
              {data.desc && <span>{data.desc}</span>}
            </div>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <>
      <div className="nav"><Navbar/></div>
      <div className="Portfolio">
        <div className="top-pic">
          <img src={portfolio} alt="portfolio" />
        </div>

        {/* SECOND NAVBAR */}
        <NavPortfolio onCategoryChange={handleCategoryChange} />

        {/* pics */}
        <div className="images-col">
          <div className="column">
            {renderImages(0, 4)}
          </div>
          <div className="column">
            {renderImages(4, 7)}
            {loadMore && (
              <>
                {renderImages(7, 8)}
              </>
            )}
          </div>
          <div className="column">
            {renderImages(8, 10)}
            {loadMore && (
              <>
                {renderImages(10, 11)}
              </>
            )}
          </div>
        </div>

        {/* Load More Button */}
        <div className="load-more-wrapper">
          <button
            className={`load-more-button ${rotating ? 'rotating' : ''}`}
            onClick={handleLoadMore}
            disabled={loadMore}
          >
            <p>
              <span>◌</span> &nbsp; Load More
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
