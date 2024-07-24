import React, { useState } from 'react';
import './Home.css';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isVideoPopupOpen, setVideoPopupOpen] = useState(false);

    const handlePlayButtonClick = () => {
        setVideoPopupOpen(true);
    };

    const handleCloseButtonClick = () => {
        setVideoPopupOpen(false);
    };
    return (
        <div className="home-container">
            <Navbar />
            <div className="swipper-background">
                <ul className="ms-tt">
                    <li className="ms-tt__text">We Create &amp; Simplify <span>•</span> We Create &amp; Simplify <span>•</span>&nbsp;</li>
                    <li className="ms-tt__text">We Create &amp; Simplify <span>•</span> We Create &amp; Simplify <span>•</span>&nbsp;</li>
                    <li className="ms-tt__text">We Create &amp; Simplify <span>•</span> We Create &amp; Simplify <span>•</span>&nbsp;</li>
                    <li className="ms-tt__text">We Create &amp; Simplify <span>•</span> We Create &amp; Simplify <span>•</span>&nbsp;</li>
                    <li className="ms-tt__text">We Create &amp; Simplify <span>•</span> We Create &amp; Simplify <span>•</span>&nbsp;</li>
                    <li className="ms-tt__text">We Create &amp; Simplify <span>•</span> We Create &amp; Simplify <span>•</span>&nbsp;</li>
                    <li className="ms-tt__text">We Create &amp; Simplify <span>•</span> We Create &amp; Simplify <span>•</span>&nbsp;</li>
                    <li className="ms-tt__text">We Create &amp; Simplify <span>•</span> We Create &amp; Simplify <span>•</span>&nbsp;</li>
                </ul>
                <img src="https://pixbinstudios.com/wp-content/uploads/2024/04/color-block-editing-concept-with-people--scaled.jpg" alt="bg" />
            </div>
            <section className='elementor-section '>
                <div class="elementor-background-overlay"></div>
                <div class="elementor-widget-container">
                    <h2 class="elementor-heading-title">Featured Projects<br />We Have Done Well</h2>	</div>
                <div className="projects">
                    <div className="left-space"></div>
                    <div className="portfolio">
                        

                            <div className="item1"><div className="image-wrapper"><Link to='/portfolio/zamir-ahmed-jewelers2'><img src="https://pixbinstudios.com/wp-content/uploads/2022/08/c-d-x-PDX_a_82obo-unsplash.jpg" alt="1" /></Link></div>
                                <h3>Zamir Ahmed Jewelers 2</h3>
                                <h4 class="ms-p-cat">design</h4>
                            </div>
                        
                            <div className="item2"><div className="image-wrapper"><Link to='/portfolio/zamir-ahmed-jewelers'><img src="https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-3-1120x630.jpg" alt="2" /></Link></div>
                                <h3>Zamir Ahmed Jewelers</h3>
                                <h4 class="ms-p-cat"></h4></div>
                        

                            <div className="item3"><div className="image-wrapper"><Link to='/portfolio/freezing-birthday'><img src="https://pixbinstudios.com/wp-content/uploads/2022/08/vishwajeet-nishad-pc21vhOv-Uo-unsplash.jpg" alt="3" /></Link></div>
                                <h3>Freezing Birthday</h3>
                                <h4 class="ms-p-cat">creative</h4>
                            </div>
                        

                        
                        <div className="item4"><div className="image-wrapper"><Link to='/portfolio/stream-shop'><img src="https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1052039207.jpg" alt="4" /></Link></div>
                                <h3>Stream Shop</h3>
                                <h4 class="ms-p-cat">design</h4>

                            </div>
                    </div>
                </div>
                <section className='video-embeder'>
                    <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title ">Why Most Is The <br />Best Choice?</h2>	</div>

                    <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title1 ">Watch this one minute video so you understand why<br /> you should use our services!</h2></div>
                    <div className="video-container">
                        <img src="https://pixbinstudios.com/wp-content/uploads/2022/10/back-view-content-creator-working-home-office-during-night-time-video-editor-home-office-1.jpg" alt="" />
                        <div className="play"><div className="play-button" onClick={handlePlayButtonClick}></div></div>
                    </div>

                </section>
                <section className="visual">
                    <div className="space"></div>
                    <div className="hr">
                        <hr />
                    </div>
                    <div className="hori"></div>
                    <div className="team">
                        <h4>Our Team Rules</h4>
                    </div>
                    <div className="our">
                        <h1 class="elementor-heading-title ">Visualizing Your Ideas</h1>
                    </div>
                    <div className="rule1">
                        <div className="hr">
                            <hr />
                        </div>
                        <div className="hori"></div>
                        <div className="r1"><p className="no">Team Rule <br /> (No. 01)</p></div>
                        <div className="to"><h2 class="title">Love what de do</h2></div>
                        <div className="para"><p className='texts'>Completely plagiarize intermandated services<br /> whereas multifunctional mindshare</p></div>
                    </div>
                    <div className="rule2">
                        <div className="hr">
                            <hr />
                        </div>
                        <div className="hori"></div>
                        <div className="r2"><p className="no">Team Rule <br /> (No. 02)</p></div>
                        <div className="to2"><h2 class="title">Trust</h2></div>
                        <div className="para2"><p className='texts'>onotonectally mesh low-risk high-yield methods of <br />empow</p></div>
                    </div>
                    <div className="rule3">
                        <div className="hr">
                            <hr />
                        </div>
                        <div className="hori"></div>
                        <div className="r3"><p className="no">Team Rule <br /> (No. 03)</p></div>
                        <div className="to3"><h2 class="title">Communication</h2></div>
                        <div className="para3"><p className='texts'>Monotonectally parallel task cross-unit e-tailers<br /> without performance based platforms.</p></div>
                    </div>
                    <div className="rule4">
                        <div className="hr">
                            <hr />
                        </div>
                        <div className="hori"></div>
                        <div className="r4"><p className="no">Team Rule <br /> (No. 04)</p></div>
                        <div className="to4"><h2 class="title">Honesty</h2></div>
                        <div className="para4"><p className='texts'>Monotonectally parallel task cross-unit e-tailers without <br />performance based platforms. </p></div>
                    </div>

                </section>
                <section className="swipper-background2">
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_6.png" alt="most_logo_partner_6" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_1.png" alt="most_logo_partner_1" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_4.png" alt="most_logo_partner_4" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_7.png" alt="most_logo_partner_7" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_6.png" alt="most_logo_partner_6" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_3.png" alt="most_logo_partner_3" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_5.png" alt="most_logo_partner_5" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_9.png" alt="most_logo_partner_9" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_2.png" alt="most_logo_partner_2" className="slide" /></div>
                    <div className="image-slider"><img src="https://pixbinstudios.com/wp-content/uploads/2022/10/most_logo_partner_8.png" alt="most_logo_partner_8" className="slide" /></div>


                </section>
            </section>
            {isVideoPopupOpen && (
                <>
                    <div className="video-overlay active" onClick={handleCloseButtonClick}></div>
                    <div className="video-popup active">
                        <span className="video-popup-close" onClick={handleCloseButtonClick}>&times;</span>
                        <iframe
                            src="https://www.youtube.com/embed/XHOmBV4js_E"
                            title="Video Placeholder"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </>
            )}
        </div>
    )
}

export default Home;
