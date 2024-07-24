import React from "react";
import "./AboutUs.css";
import aboutBg from "../assets/About-bg.png";
import img1 from "../assets/p-1.png";
import img2 from "../assets/p-2.png";
import img3 from "../assets/p-3.png";
import img4 from "../assets/p-4.png";
import img5 from "../assets/p-5.png";
import img6 from "../assets/p-6.png";
import Navbar from "../pages/navbar/Navbar";

const cardsData = [
  {
    id: 1,
    imgSrc: img1,
    title: "Abdul Aziz",
    subtitle: "Project Manager",
    description:
      "Rapidiously synergize revolutionary portals with holistic leadership skills. ",
  },
  {
    id: 2,
    imgSrc: img2,
    title: "Izza Fatima",
    subtitle: "Project Manager",
    description:
      "Authoritatively brand turnkey models before high standards in action items. ",
  },
  {
    id: 3,
    imgSrc: img3,
    title: "Fahad Umer",
    subtitle: "CO-Founder, Project Manager",
    description:
      "Monotonectally deploy high-quality customer service whereas business initiatives.",
  },
  {
    id: 4,
    imgSrc: img4,
    title: "Nabeel Waheed",
    subtitle: "Web Developer",
    description:
      "Authoritatively benchmark customized architectures without go forward value.",
  },
  {
    id: 5,
    imgSrc: img5,
    title: "Aleeha Ahmed",
    subtitle: "Visual Communication Designer",
    description:
      "Enthusiastically provide access to world-class communities after turnkey supply chains.",
  },
  {
    id: 6,
    imgSrc: img6,
    title: "Najaf Ali",
    subtitle: "3D visualizer",
    description:
      "Globally cultivate reliable best practices through error-free manufactured products.",
  },
  {
    id: 7,
    imgSrc: img4,
    title: "Qurrat Ul Ain",
    subtitle: "Social Media Marketer",
    description:
      "Authoritatively benchmark customized architectures without go forward value.",
  },
  {
    id: 8,
    imgSrc: img5,
    title: "Wajeeh Ul Hassan",
    subtitle: "Web Developer",
    description:
      "Enthusiastically provide access to world-class communities after turnkey supply chains.",
  },
  {
    id: 9,
    imgSrc: img6,
    title: "Umaima Imran",
    subtitle: "Video Editor",
    description:
      "Globally cultivate reliable best practices through error-free manufactured products.",
  },
];

const AboutUs = () => {
  return (
    <>
        <div className="nav"><Navbar/></div>
    <div className="aboutUs-container">
      <h1 className="heading">
        We Are A <span>Design Agency</span> <br />
        For Visually Compelling Stories.
      </h1>

      <div className="card-component">
        <img
          src={aboutBg}
          alt="About Background"
          className="background-image"
        />
      </div>
      <div className="hr">
        <hr />
        <span className="hr-span">Our Team</span>
      </div>
      <h2 className="heading-2">
        We Have Come <br />
        Together to Create
      </h2>
      <div className="cards">
        {cardsData.map((card) => (
          <div key={card.id} className={`card card-${card.id}`}>
            <img src={card.imgSrc} alt={card.title} />
            <h2>{card.title}</h2>
            <span>{card.subtitle}</span>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="hr">
        <hr />
        <span className="hr-span">Send a Request</span>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
