import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SearchDialog from '../../components/SearchDialog/SearchDialog';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            if (window.scrollY > 50) {
                setIsNavbarVisible(window.scrollY < window.lastScrollY || window.scrollY === 0);
            }

            window.lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [theme]);

    const toggleDarkMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleSearchDialog = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const properties = {
        dark: {
            r: 9,
            transform: 'rotate(40deg)',
            cx: 12,
            cy: 4,
            opacity: 0,
        },
        light: {
            r: 5,
            transform: 'rotate(90deg)',
            cx: 30,
            cy: 0,
            opacity: 1,
        },
        springConfig: { mass: 4, tension: 250, friction: 35 },
    };

    const { r, transform, cx, cy, opacity } = theme === 'light' ? properties.light : properties.dark;

    const svgContainerProps = useSpring({
        transform,
        config: properties.springConfig,
    });

    const centerCircleProps = useSpring({ r, config: properties.springConfig });
    const maskedCircleProps = useSpring({
        cx,
        cy,
        config: properties.springConfig,
    });

    const linesProps = useSpring({ opacity, config: properties.springConfig });

    return (
        <>
            <div
                className="navbar-placeholder"
                onMouseEnter={() => setIsNavbarVisible(true)}
                onMouseLeave={() => setIsNavbarVisible(false)}
            >
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className={`main-header__layout ${isScrolled ? 'scrolled' : ''} ${!isNavbarVisible ? 'hidden' : ''}`}>
                <div className="main-header__inner">
                    <div className="main-header__logo">
                        <div className="logo-dark">
                            <Link to='/'>
                                <img src="http://pixbinstudios.com/wp-content/uploads/2024/05/Pixbin-Logo-Dark.png" alt="Pixbin" />
                            </Link>
                        </div>
                        <div className="logo-light">
                            <Link to='/'>
                                <img src="http://pixbinstudios.com/wp-content/uploads/2024/05/Pixbin-Logo-Light.png" alt="Pixbin" />
                            </Link>
                        </div>
                    </div>

                    <nav className="main-header__nav js-main-header__nav main-header__default" id="main-header-nav" aria-labelledby="primary-menu">
                        <ul id="primary-menu" className="navbar-nav">
                            <li className="menu-item1">
                                <Link to='/'>
                                    <span className='span1'>Home</span>
                                    <span className='span3'>Home</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/portfolio'>
                                    <span className='span1'>Portfolio</span>
                                    <span className='span3'>Portfolio</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/services'>
                                    <span className='span1'>Services</span>
                                    <span className='span3'>Services</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/imagegallery'>
                                    <span className='span1'>Image Gallery</span>
                                    <span className='span3'>Image Gallery</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/aboutus'>
                                    <span className='span1'>About Us</span>
                                    <span className='span3'>About Us</span>
                                </Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/contact'>
                                    <span className='span1'>Contact</span>
                                    <span className='span3'>Contact</span>
                                </Link>
                            </li>
                            {/* <li className="menu-item theme-icon">
                                <animated.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                    onClick={toggleDarkMode}
                                    className="theme-toggle"
                                    style={{
                                        cursor: "pointer",
                                        ...svgContainerProps
                                    }}
                                >
                                    <mask id="myMask2">
                                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                        <animated.circle style={maskedCircleProps} r="9" fill="black" />
                                    </mask>

                                    <animated.circle
                                        cx="12"
                                        cy="12"
                                        style={centerCircleProps}
                                        fill={theme === 'light' ? 'black' : 'white'}
                                        mask="url(#myMask2)"
                                    />
                                    <animated.g stroke="currentColor" style={linesProps}>
                                        <line x1="12" y1="1" x2="12" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="23" />
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                        <line x1="1" y1="12" x2="3" y2="12" />
                                        <line x1="21" y1="12" x2="23" y2="12" />
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                    </animated.g>
                                </animated.svg>
                            </li> */}
                        </ul>
                    </nav>

                    <div className="search-icon" onClick={toggleSearchDialog}>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>

            <SearchDialog isOpen={isSearchOpen} onClose={toggleSearchDialog} />
        </>
    );
};

export default Navbar;
