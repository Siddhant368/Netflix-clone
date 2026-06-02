import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpeg";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import TitleCard from "../../components/TitleCard/TitleCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <img
          src={hero_banner}
          alt="Stranger Things Banner"
          className="banner-img"
        />

        <div className="hero-overlay"></div>

        <div className="hero-caption">
          <h1>Stranger Things</h1>

          <p>
            A thrilling mix of mystery, friendship, adventure, and supernatural
            events set in the 1980s. Follow Eleven and her friends as they
            uncover secrets hidden in the Upside Down.
          </p>

          <div className="hero-btns">
            <button className="btn">
              <FaPlay />
              Play Now
            </button>

            <button className="dark-btn">
              <AiOutlineInfoCircle size={22} />
              More Information
            </button>
          </div>
        </div>

        <TitleCard title="Trending Now" />
      </section>

      <section className="more-cards">
        <TitleCard title="Top Rated Movies" category="top_rated" />
        <TitleCard title="Popular on Netflix" category="popular" />
        <TitleCard title="Upcoming Releases" category="upcoming" />
        <TitleCard title="Now Playing" category="now_playing" />
      </section>

      <Footer />
    </div>
  );
};

export default Home;