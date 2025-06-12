import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero_Banner from '../../assets/Hero_Banner.png'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    
        <div className = 'home'>
            <Navbar/>
            <div className="hero">
                <img src={Hero_Banner} alt="" className='banner-img'/>
                <div className="hero-caption">
                     <img src={hero_title} alt="" className='caption-img'/>
                     <p>"Welcome to Netflix — your ultimate entertainment destination.
                         Dive into a world of gripping dramas, iconic series like Grey's Anatomy, 
                         heart-pounding thrillers, laugh-out-loud comedies, and blockbuster movies."</p>
                         <div className="hero-btns">
                            <button className='btn'><img src={play_icon} alt=""/>Play</button>
                            <button className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
                         </div>
                         <TitleCards/>
                </div>
                </div>
                <div className="more-cards">
                  <TitleCards title={"Blockbuster movies"}/>
                   <TitleCards title={"Only for you"}/>
                    <TitleCards title={"Upcoming"}/>
                     <TitleCards title={"Top picks for you"}/>
                  
            </div>
            <Footer/>
    </div>
  )
}
export default Home