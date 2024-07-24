import React, { useEffect, useRef, useState } from 'react';
import './DarkSide.css';
import NextPage from '../NextPage/NextPage';
import LightBox from '../../themePages/Lightbox';
import Navbar from '../navbar/Navbar'
import Lightbox from '../../themePages/Lightbox';

const imageSources = [
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-4361436.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/alex-sh-ZsAfhWL6l3c-unsplash.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/stock-photo-1052039207.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/vishwajeet-nishad-pc21vhOv-Uo-unsplash.jpg",
];

const DarkSide = () => {
  const [isSticky, setIsSticky] = useState(true);
  const containerRef = useRef(null);
  const txtRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const txtElement = txtRef.current;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const txtRect = txtElement.getBoundingClientRect();

      // If the bottom of the container is less than the bottom of the viewport, switch to relative positioning
      if (containerRect.bottom < txtRect.bottom) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
      <div className="nav"><Navbar /></div>
      <section className='shop-container'>
        <div className="heading">
          <h1 class="elementor-size-default">Stream Shop</h1>
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
          <img src="https://theme.madsparrow.me/most/wp-content/uploads/2022/10/most_slide_3.jpg" alt="" />
        </div>
      </section>
      <section className="content">
        <div
          className={`txt ${!isSticky ? 'relative' : ''}`}
          ref={txtRef}
        >
          <h1>PROGRESSIVELY PREDOMINATE</h1>
          <p>Professionally synergize next-generation quality vectors without open-source<br /> scenarios. Collaboratively evolve scalable deliverables via inexpensive materials.<br /> Objectively reintermediate sustainable models and fully tested technologies. <br />sources. Assertively drive leveraged technology for mission-critical synergy.<br /> Synergistically re-engineer top-line process improvements for worldwide vortals.<br /> Authoritatively pontificate team driven markets whereas B2B bandwidth.</p>
        </div>
        <div className="txt-img" ref={containerRef}>
          {imageSources.map((src, index) => (
            <div className="ig1" key={index}>
              <img src={src} alt=""   onClick={() => openLightbox(index)} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <NextPage
          link="/portfolio/zamir-ahmed-jewelers2"
          title="Zamir Ahmed Jewelers 2"
          image="https://pixbinstudios.com/wp-content/uploads/2022/08/c-d-x-PDX_a_82obo-unsplash.jpg"
        />
      </section>
      
  {lightboxOpen && (
        <Lightbox
          images={imageSources}
          onClose={closeLightbox}
          selectedIndex={selectedImageIndex}
        />
      )}
    </div>
  );
};

export default DarkSide;
