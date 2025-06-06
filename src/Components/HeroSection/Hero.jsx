import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup'
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="padding innerWidth flexCenter hero-container">
            <div className="hero-left flexColStart">
               <div className="hero-title">
                <div className='orange-circle'/>
                <h1>Discover<br /> Most Suitable <br />Property</h1>
               </div>
               <div className="hero-des flexColStart">
                <span className='secondaryText'>Find a Variety of properties that suit you very easilty </span>
                <span className='secondaryText'>Forget all difficulties in finding a residence for you.</span>
                <span className='secondaryText'>Find a Variety of properties that suit you very easilty. Find a Variety of desing.</span>
                </div>
                <div className=' flexCenter search-bar'>
                    <HiLocationMarker color='var(--blue)' size={25} />
                    <input type='text' />
                    <button className="button">Search</button> 
                </div>
                <div className="flexCenter counters">
                    <div className="flexColCenter counter">
                        <span>
                            <CountUp start={8000} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Primium Product</span>
                    </div>
                    <div className="flexColCenter counter">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customer</span>
                    </div>
                    <div className="flexColCenter counter">
                        <span>
                            <CountUp end={25}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>
            </div>
            <div className="hero-right flexCenter">
                <div className="image-container">
                    <img src="../asset/hero-image.jpg" alt='heroImage'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero