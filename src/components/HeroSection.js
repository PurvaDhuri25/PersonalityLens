  
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import myVideo from './vid2.mp4'
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={myVideo} type="video/mp4" autoPlay muted loop/>
            <h1>PERSONALITY LENS</h1>
            <p>“ Because, Life isn’t about finding yourself. Life is about creating yourself.”</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>HOW IT WORKS? <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
