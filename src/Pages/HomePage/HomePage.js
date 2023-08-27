import React from 'react'
import myimage from '../../Assets/myimage.png'
import { NavLink } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';

import './HomePage.css';
const HomePage = () => {
  return (
    <div className='homepage-maincontainer'>

      <div className='homepage-container'>
        <div className='homepage-first-container'>
          <div className='writing-container'>
            <h1 className='homepage-name-heading'>I'M <span className='home-span-heading'>Nupur Patel</span></h1>
            <p className='homepage-sub-heading'>
              <span className='home-span-heading'>A</span>
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter.typeString('')
                    .pauseFor(550)
                    .deleteAll()
                    .typeString('Jr.Frontend Developer')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Nail Technician')
                    .pauseFor(250)
                    .start();
                }} /></p>
            <p className='homepage-about-container'>
              I enjoy taking complex problems and turning them into simple and beautiful interface websites. I also love the logic and structure of coding and always solve to write elegant and efficient code.
            </p>
            <NavLink exact to='/about' className='aboutpage-link'>MORE ABOUT ME</NavLink>
          </div>
        </div>
        <div className='homepage-second-container'>
          <div className='image-container'>
            <img src={myimage} />
          </div>
        </div>
      </div>
    </div>


  )
}

export default HomePage