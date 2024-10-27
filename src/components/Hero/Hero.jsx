import React from 'react'
import './Hero.css'
import profile_img from '../../assets/9334398.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='img' src={profile_img} alt="" />
        <h1><span>I'm Enoch Oba,</span> frontend dev based in Nigeria</h1>
        <p>I am a frontend developer from Lagos, Nigeria with 2 years of experience</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>

    </div>
  )
}

export default Hero