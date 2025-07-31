import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../assets/hero_banner.jpg";
import title from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png";
import info from "../../assets/info_icon.png";
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img className="hero-img" src={Hero} alt="" />

        <div className="hero-description">
          <img className="hero-title" src={title} alt="" />
          <p>THIS A CLONE WEBSITE ONLY FOR EDUCATIONAL PURPOSE</p>

          <div className="buttons">
            <button className="btn-play">
              <img src={play} alt="" />
              Play
            </button>
            <button className="btn-info">
              <img src={info} alt="" />
              More Info
            </button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title="Ongoing Shows" Catagory="popular" />
        <Titlecards title="Romance" Catagory="top_rated" />
        <Titlecards title="Comedy" Catagory="upcoming" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
