import React,{useState} from 'react';
import './Jewels.css';
import NextPage from '../NextPage/NextPage';
import Navbar from '../navbar/Navbar';
import Lightbox from '../../themePages/Lightbox';

const mainImageSrc = "https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-3-scaled.jpg";

const imageSources = [
    "https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-4-scaled.jpg",
    "https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-6-scaled.jpg",
    "https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-5-scaled.jpg",
    "https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-2-scaled.jpg",
    "https://pixbinstudios.com/wp-content/uploads/2024/05/Zamir-Ahmed-Branding-A-3-scaled.jpg"
];

const Jewels = () => {
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
            <section className="img1"><img src={mainImageSrc} alt="" /></section>
            <section className='img-container'>
                {imageSources.map((src, index) => (
                    <div className={`img${index + 2}`} key={index}>
                        <img src={src} alt="" onClick={() => openLightbox(index)} />
                    </div>
                ))}
            </section>
            <section>
                <NextPage
                    link="/portfolio/freezing-birthday"
                    title="FREEZING BIRTHDAY"
                    image="https://pixbinstudios.com/wp-content/uploads/2022/08/vishwajeet-nishad-pc21vhOv-Uo-unsplash.jpg"
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
}

export default Jewels;
