import React from 'react';
import './Card.css'; // Assuming you have a CSS file for card styles

const Card = ({ imageUrl, title, description }) => {
    return (
        
        <div className="ms-sb card1">
            <div className="ms-sb--img boxed">
                <img decoding="async" src={imageUrl} alt={title} loading="lazy" />
            </div>
            <div className="ms-sb--inner">
                <h4 className="ms-sb--title">{title}</h4>
                <p className="ms-sb--text">{description}</p>
            </div>
        </div>
    );
};

export default Card;
