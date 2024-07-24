import React from "react";
import "./Footer.css";
import Button from "./Button.jsx";
import { FaTwitter, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-main">
          Got a{" "}
          <b>
            PROJECT <br />
            IN MIND?
          </b>{" "}
          <Button />
        </p>
        <div className="footer-links">
          <a
            href="https://dribbble.com/pixbinstudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
            <FaDribbble className="icon" />
            <h6 className="a-h2">@pixbinstudious</h6>
          </a>
          <a
            href="https://twitter.com/pixbinstudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <FaTwitter className="icon" />
            <h6 className="a-h2">@pixbinstudious</h6>
          </a>
          <a
            href="https://instagram.com/pixbinstudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <FaInstagram className="icon" />
            <h6 className="a-h2">@pixbinstudious</h6>
          </a>
          <a
            href="https://behance.net/pixbinstudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
            <FaBehance className="icon" />
            <h6 className="a-h2">@pixbinstudious</h6>
          </a>
        </div>
        <div className="footer-text">
          <p className="footer-left">
            &copy; 2024 PixbinStudios, All Rights Reserved.
          </p>
          <p className="footer-right">Powered by PixbinStudios</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
