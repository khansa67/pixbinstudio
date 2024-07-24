import React, { useState } from 'react';
import './StreamShop.css';
import NextPage from '../NextPage/NextPage';
import Navbar from '../navbar/Navbar'
import Lightbox from '../../themePages/Lightbox';

const images = [
    "https://pixbinstudios.com/wp-content/uploads/2022/08/1212.jpg",
    "https://pixbinstudios.com/wp-content/uploads/2022/08/1802.jpg",
    "https://pixbinstudios.com/wp-content/uploads/2022/08/114.jpg",
    "https://pixbinstudios.com/wp-content/uploads/2022/08/702.jpg"
];

const StreamShop = () => {
  
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
            <section className='im4'>
                <div className="row grid grid-content blockgallery h_s1">
                    <div className="grid-sizer col-xs-12 col-lg-6 col-md-3"></div>
                    {images.map((img, index) => (
                        <div key={index} className={`grid-item col-6 col-lg-6 col-md-4 media-wrapper${index + 1}`}>
                            <a href="#"  className="mfp-img" title="">
                                <figure className={`media-wrapper media-wrapper--1:1`}>
                                    <img decoding="async" src={img} alt={`Image ${index + 1}`} onClick={() => openLightbox(index)} loading="lazy" />
                                    <div className="overlay"></div>
                                </figure>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <NextPage
                    link="/portfolio/random-risk"
                    title="RANDOM RISK"
                    image="https://pixbinstudios.com/wp-content/uploads/2022/08/alex-sh-ZsAfhWL6l3c-unsplash.jpg"
                />
            </section>
            {lightboxOpen && (
        <Lightbox
          images={images}
          onClose={closeLightbox}
          selectedIndex={selectedImageIndex}
        />
      )}
        </div>
    );
};

export default StreamShop;
