import React, {useState} from 'react';
import './JusticeRobot.css';
import NextPage from '../NextPage/NextPage';
import Navbar from '../navbar/Navbar';
import Lightbox from '../../themePages/Lightbox';

const sliderImages = [
  "https://pixbinstudios.com/wp-content/uploads/2022/08/114.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/702.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/1802.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/1212.jpg"
];

const txt2Images = [
  "https://pixbinstudios.com/wp-content/uploads/2022/08/702.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/1802.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/114.jpg",
  "https://pixbinstudios.com/wp-content/uploads/2022/08/1212.jpg"
];

const JusticeRobot = () => {
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
          <h1 className="elementor-size-default">JUSTICE ROBOT</h1>
        </div>
        <div className="graph">
          <p className="global">
            Distinctively productize top-line leadership without <br />
            excellent synergy. Competently drive corporate <br />
            innovation through dynamic infomediaries.
          </p>
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
          <p className="tag">
            #3D &ensp;&ensp;&nbsp; #ANIMATION &ensp;&ensp;&nbsp; #USER &ensp;&ensp;&nbsp; #GENERATED &ensp;&ensp;&nbsp; #CONTENT &ensp;&ensp;&nbsp; #DESIGN &ensp;&ensp;&nbsp; #FRONT-END<br />
            #DEVELOPMENT &ensp;&ensp;&nbsp; #BACK-END &ensp;&ensp;&nbsp; #DEVELOPMENT &ensp;&ensp;&nbsp; #CLOUD &ensp;&ensp;&nbsp; #RENDERING
          </p>
        </div>
      </section>
      <section className="im-slider">
        {sliderImages.map((src, index) => (
          <div className="sli" key={index}>
            <img src={src} alt={`Slider ${index + 1}`} onClick={() => openLightbox(index)} />
          </div>
        ))}
      </section>
      <section className='xo'>
        <div className="txt2">
          <h1>DISTINCTIVELY ORCHESTRATE</h1>
          <p>
            Monotonectally grow backward-compatible services through economically sound innovation. Interactively generate fully tested strategic theme areas via open-source<br />
            methods of empowerment. Synergistically harness interactive deliverables rather than functional internal or “organic” sources. Compellingly harness orthogonal vortals and<br />
            high-payoff expertise. Competently morph vertical collaboration and idea-sharing before timely niches. <br /><br />
            Objectively empower cross-unit total linkage after goal-oriented imperatives. Continually reinvent emerging e-tailers before cost effective strategic theme areas. Credibly<br />
            cultivate installed base e-commerce via scalable functionalities. Dynamically fabricate client-based manufactured products after installed base products. Seamlessly<br />
            maximize open-source ROI via innovative ideas.
          </p>
        </div>
      </section>
      <section className='txt2-image'>
        <div className="txt-container">
          <div className="txt2-img1"><img src={txt2Images[0]} alt="Text Image 1" onClick={() => openLightbox(0)} /></div>
          <div className="txt2-img3"><img src={txt2Images[1]} alt="Text Image 3"  onClick={() => openLightbox(1)}/></div>
        </div>
        <div className="txt-container2">
          <div className="txt2-img2"><img src={txt2Images[2]} alt="Text Image 2" onClick={() => openLightbox(txt2Images[2])} /></div>
          <div className="txt2-img4"><img src={txt2Images[3]} alt="Text Image 4" onClick={() => openLightbox(txt2Images[3])} /></div>
        </div>
        <div className="tx">
          <p>
            Collaboratively strategize market positioning users for frictionless technologies. Rapidiously generate enterprise-wide bandwidth through an expanded array of methods of<br />
            empowerment. Completely visualize client-centered meta-services vis-a-vis revolutionary products. Objectively pontificate progressive products vis-a-vis fully <br />
            researched core competencies. Proactively coordinate cross-unit bandwidth without focused technology.
          </p>
        </div>
      </section>
      <section>
        <NextPage
          link="/portfoli/dark-side"
          title="THE DARK SIDE"
          image="https://pixbinstudios.com/wp-content/uploads/2022/08/rachit-tank-2cFZ_FB08UM-unsplash-scaled-1.jpg"
        />
      </section>
      {lightboxOpen && (
                <Lightbox
                    images={[...sliderImages, ...txt2Images]}
                    onClose={closeLightbox}
                    selectedIndex={selectedImageIndex}
                />
            )}
    </div>
  );
};

export default JusticeRobot;
