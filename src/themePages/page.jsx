import React from "react";
import "./page.css";
import { Link } from "react-router-dom";

const NextPage = ({link, imageUrl, title }) => {
    return (
    <div className="n">
      <div className="next-container">
        <div className="next-p">
        <Link to={link}>
            <div className="ms-spn--head">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"></path>
                </g>
              </svg>
              <h3>Next Project</h3>
            </div>
            <br />
            <h1>{title}</h1>
            </Link>
        </div>
      </div>
      <div className="next-img">
        <img
          src={imageUrl}
          alt="Next Project"
        />
      </div>
    </div >
  );
};

export default NextPage;