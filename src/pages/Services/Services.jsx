import React, { useState, useRef } from "react";
import Card from "../../components/Card/Card";
import "./Services.css"; // Import the CSS file for Services
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 9,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        beforeChange: (current, next) => {
            setCurrentSlide(next);
        },
    };

    return (<>
        <div className="nav"><Navbar/></div>
        <div className="services-page-container">
            {" "}
            {/* Wrap everything in a container */}
            <Slider {...settings}>
                <div className="first-slider-img">
                    <div className="slide-content">
                        <h3 className="plus-jakarta-sans">OUR VISION</h3>
                        <h1 className=".inter-font">BRANDING</h1>
                        <p className="plus-jakarta-sans400">
                            Credibly leverage existing business experiences through
                            <br /> magnetic mindshare. Synergistically exploit
                            <br /> efficient partnerships world-class applications.
                        </p>
                        <div className="btn-wrap">
                            <div className="label">

                                <Link to='/portfolio' className="text">
                                    <div className="h">
                                        <div className="dot"></div>
                                        <div className="circle-icon">
                                            <FaArrowRight size={'1px'} className="fas1" />
                                        </div>
                                    </div>
                                    Take A Look</Link>
                            </div>
                        </div>

                    </div>
                    <img
                        src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_slide_1.jpg"
                        alt=""
                        className="first-img"
                    />
                </div>
                <div className="first-slider-img">
                    <div className="slide-content">
                        <h3 className="plus">INSPIRATION</h3>
                        <h1 className="inter">UI/UX</h1>
                        <p className="plus-jakarta-sans400">
                            Conveniently formulate progressive users for error-free
                            <br /> interfaces. Monotonectally deploy superior <br />
                            relationships without seamless infomediaries.{" "}
                        </p>
                        <div className="btn-wrap">
                            <div className="label">

                            <Link to='/portfolio' className="text">
                                    <div className="h">
                                        <div className="dot"></div>
                                        <div className="circle-icon2">
                                            <FaArrowRight size={'1px'} className="fas1" />
                                        </div>
                                    </div>
                                    See More</Link>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_slide_3.jpg"
                        alt=""
                        className="first-img"
                    />
                </div>
                <div className="first-slider-img">
                    <div className="slide-content">
                        <h1 className="font">ENGINE</h1>
                        <p className="plus-jakarta-sans400">
                            Authoritatively mesh robust web services and web-enabled ROI.{" "}
                            <br />
                            Globally communicate extensible e-services <br />
                            rather than backend users.
                        </p>
                        <div className="btn-wrap">
                            <div className="label">
                            <Link to='/portfolio' className="text">
                                    <div className="h">
                                        <div className="dot"></div>
                                        <div className="circle-icon2">
                                            <FaArrowRight size={'1px'} className="fas1" />
                                        </div>
                                    </div>
                                    Take A Look</Link>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://pixbinstudios.com/wp-content/uploads/2022/08/114.jpg"
                        alt=""
                        className="first-img"
                    />
                </div>
                <div className="first-slider-img">
                    <div className="slide-content">
                        <h1 className="font">BRANDING</h1>
                        <p className="plus-jakarta-sans400">
                            Authoritatively mesh robust web services and web-enabled ROI.{" "}
                            <br />
                            Globally communicate extensible e-services <br />
                            rather than backend users.
                        </p>
                        <div className="btn-wrap">
                            <div className="label">

                            <Link to='/portfolio' className="text">
                                    <div className="h">
                                        <div className="dot"></div>
                                        <div className="circle-icon3">
                                            <FaArrowRight size={'1px'} className="fas1" />
                                        </div>
                                    </div>
                                    Take A Look</Link>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://pixbinstudios.com/wp-content/uploads/2022/08/1802.jpg"
                        alt=""
                        className="first-img"
                    />
                </div>
            </Slider>
            {/* <div class="ms-slider--progress center">
                <div class="ms-slider--count">03</div>
                <div class="ms-slider--pagination swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"><span class="swiper-pagination-progressbar-fill" style={{
                    width: `${(currentSlide + 1) * 25}%`,
                    height: '100%',
                    background: 'white',
                    
                    transform: 'translate3d(0px, 0px, 0px) scaleX(0.75) scaleY(1)',
                    transitionDuration: '1000ms'
                }}></span></div>
                <div class="ms-slider--count__total">04</div>
            </div> */}

            <div className="services-container">
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/code-1.svg"
                    title="Development"
                    description="Create a platform with the best and coolest quality from us."
                />
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/layer.svg"
                    title="UI/UX Designer"
                    description="We provide UI/UX Design services, and of course with the best quality"
                />
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/code-2.svg"
                    title="Graphic Designer"
                    description="We provide Graphic Design services, with the best designers"
                />
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/align-vertically.svg"
                    title="Motion Graphic"
                    description="Create a platform with the best and coolest quality from us."
                />
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/camera.svg"
                    title="Photography"
                    description="We provide Photography services, and of course with the best quality"
                />
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/video-play.svg"
                    title="Videography"
                    description="We provide Videography services, and of course with the best quality"
                />
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/layer.svg"
                    title="UI/UX Designer"
                    description="We provide UI/UX Design services, and of course with the best quality"
                />
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/code-2.svg"
                    title="Graphic Designer"
                    description="We provide Graphic Design services, with the best designers"
                />
                <Card
                    imageUrl="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/code-1.svg"
                    title="Development"
                    description="Create a platform with the best and coolest quality from us."
                />
            </div>
        </div>
    </>
    );
};

export default Services;
