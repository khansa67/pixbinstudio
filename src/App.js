import "./App.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/AboutUs";
import ImageGallery from "./components/ImageGallery";
import Portfolio from "./components/Portfolio";
import ZamirAhmedJewelers2 from "./themePages/ZamirAhmedJewelers2";
import RandomRisk from "./themePages/RandomRisk";
import ColorCurrent from "./themePages/ColorCurrent";
import TestPortfolio from "./themePages/TestPortfolio";
import FreezingBirthday from "./themePages/FreezingBirthday";
import DarkSide from "./pages/DarkSide/DarkSide.jsx";
import StreamShop from "./pages/StreamShop/StreamShop.jsx";
import WigglyFinger from "./pages/WigglyFinger/WigglyFinger.jsx";
import JusticeRobot from "./pages/JusticeRobot/JusticeRobot.jsx";
import Jewels from "./pages/Jewels/Jewels.jsx";
import Navbar from "./pages/navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="contact-wrapper">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imagegallery" element={<ImageGallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/portfolio/test-portfolio" element={<TestPortfolio />} />
          <Route path="/portfolio/freezing-birthday" element={<FreezingBirthday />} />
          <Route path="/portfolio/random-risk" element={<RandomRisk />} />
          <Route path="/portfolio/color-current" element={<ColorCurrent />} />
          <Route path="/portfolio/zamir-ahmed-jewelers2" element={<ZamirAhmedJewelers2/>} />
          <Route path="/portfolio/wiggly-finger" element={<WigglyFinger />} />
          <Route path="/portfolio/stream-shop" element={<StreamShop />} />
          <Route path="/portfolio/justice-robot" element={<JusticeRobot/>} />
          <Route path="/portfolio/zamir-ahmed-jewelers" element={<Jewels />} />
          <Route path="/portfolio/dark-side" element={<DarkSide />} />

        </Routes>
      </BrowserRouter>
      </div>
      <ScrollToTop />
      <Footer style={{marginTop:'40px'}} />
    </div>
  );
}

export default App;
