import React from 'react';
import './WigglyFinger.css';
import NextPage from '../NextPage/NextPage';
import ImageSlider from '../../components/ImageSlider/ImageSlider'; // Update the import path if necessary
import Navbar from '../navbar/Navbar'

const WigglyFinger = () => {
    return (
        <div>
            <div className="nav"><Navbar/></div>
            <section className='shop-container'>
                <div className="heading">
                    <h1 className="elementor-size-default">Stream Shop</h1>
                </div>
                <div className="graph">
                    <p className="global">Globally morph real-time e-business with optimal users.<br /> Dramatically extend high-payoff infomediaries through<br /> integrated experiences.</p>
                </div>
                <div className="containers">
                    <div className="commitment_left">
                        <h3 className="-left">CLIENT:</h3>
                        <span className="left_span">ThemeForest</span>
                    </div>
                    <div className="commitment_right">
                        <h3 className="-right">PARTNERS:</h3>
                        <span className="right_span">Envato</span>
                    </div>
                </div>
                <div className="hash">
                    <p className="tag">#3D &ensp;&ensp;&nbsp; #ANIMATION &ensp;&ensp;&nbsp; #USER &ensp;&ensp;&nbsp; #GENERATED &ensp;&ensp;&nbsp; #CONTENT &ensp;&ensp;&nbsp; #DESIGN &ensp;&ensp;&nbsp; #FRONT-END<br /> #DEVELOPMENT &ensp;&ensp;&nbsp;#BACK-END &ensp;&ensp;&nbsp; #DEVELOPMENT &ensp;&ensp;&nbsp; #CLOUD &ensp;&ensp;&nbsp; #RENDERING</p>
                </div>
            </section>
            <section className='im'>
                <div className='im-container'>
                    <img src="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/most_slide_1.jpg" alt="" />
                </div>
            </section>
            <ImageSlider />
            <section>
                <NextPage
                    link="/portfolio/zamir-ahmed-jewelers2"
                    title="SUBSEQUENT SNEEZE"
                    image="https://pixbinstudios.com/wp-content/uploads/2022/08/c-d-x-PDX_a_82obo-unsplash.jpg"
                />
            </section>
        </div>
    );
};

export default WigglyFinger;
