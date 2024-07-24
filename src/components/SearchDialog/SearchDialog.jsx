import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import './SearchDialog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchDialog = ({ isOpen, onClose }) => {
    const dialogAnimation = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
    });

    return (
        <animated.div className="search-dialog" style={dialogAnimation}>
            <div className="dialog-header">
                <button className="close-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="ms-search-widget">
                <input type="search" placeholder="Search..." className="search-field" />
                <button type="submit" className="search-submit">
                    <FontAwesomeIcon className='fa' icon={faSearch} />
                </button>
            </div>
        </animated.div>
    );
};

export default SearchDialog;
