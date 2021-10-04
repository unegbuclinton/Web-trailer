import React from 'react'
import { Button } from './Button'
import '../App.css'
import  './Hero.css'

function Hero() {
    return (
        <div className ='hero--container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1> CLINTON ADVENTURE </h1>
            <p>What are you waiting for?
            <div className='hero-btns'>
                
            <Button className='btns' 
                 buttonStyles='btn--outline' buttonSize='btn--large'> Get Started
            
            </Button>

            <Button className='btns' 
                 buttonStyles='' buttonSize='btn--large'> Watch Trailer <i className='far fa-play-circle'/>
            </Button>
            
            </div>
            </p>
             
        </div>
    )
}

export default Hero
