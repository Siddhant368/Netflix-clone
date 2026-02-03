import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpeg'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import TitleCard from '../../components/TitleCard/TitleCard';
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'  />
        <div className="hero-caption">

          <p>The show mixes friendship, mystery, horror, and adventure, with iconic characters like Eleven, who has telekinetic powers, and a strong nostalgic 80s vibe."</p>

              <div className="hero-btns">
                <button className='btn'><FaPlay/>Play</button>
                 <button className=' dark-btn'>
                    <AiOutlineInfoCircle  size={22}/> More Info
                 </button>
              </div>

            
             
        </div>
         <TitleCard/>
      </div>

      <div className="more-cards">
         <TitleCard title={"block buster movie "} category={"top_rated"}/>
          <TitleCard title={"Only on netflix"} category={"popular"}/>
           <TitleCard title={"Upcoming"} category={"upcoming"}/>
            <TitleCard title={"Top Pics for you"} category={"now_playing"}/>
             
      </div>
      <Footer/>
    </div>
  )
}

export default Home
