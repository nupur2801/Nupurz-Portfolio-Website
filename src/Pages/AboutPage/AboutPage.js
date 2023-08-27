import React from 'react'
import './AboutPage.css'
import myimage from '../../Assets/myimage.png';
import NupurPatelResume from '../../Resume/NupurPatelResume.pdf';
const AboutPage = () => {
    return (

        <div className='about-maincontainer'>
            <div className='about-container'>
                <div className='about-heading'>
                    <h1>ABOUT <span className='span-heading'>ME</span></h1>
                    <span className='background-heading'> RESUME</span><br></br>
                </div>
                <div className='info-heading'>
                    <h3>Personal Info</h3>
                </div>
                <div className='aboutpage-infocontainer'>
                    <div className='aboutpage-leftcontainer'>
                        <div className='about-myimagecontainer'>
                            <img src={myimage} />
                        </div>
                    </div>
                    <div className='aboutpage-rightcontainer'>
                        <div className='personal-infocontainer'>
                            <div>
                                <h4>First Name: <span>Nupur</span></h4>
                                <h4>Age: <span>20</span></h4>
                                <h4>Profession: <span>Nail Technician</span></h4>
                                <h4>Phone: <span>8401702801</span></h4>
                            </div>
                            <div>
                                <h4>Last Name: <span>KachhiaPatel</span></h4>
                                <h4>Nationality: <span>Indian</span></h4>
                                <h4>Languages: <span>English, Hindi, Gujarati</span></h4>
                                <h4>Email: <span>nupurpatel602@gmail.com</span></h4>
                            </div>


                        </div>
                        <div className='aboutpage-button-container'>
                            <a href={NupurPatelResume} target='_blank' download='NupurPatelResume.pdf' >Download Resume </a>
                        </div>
                    </div>
                </div>
                <div className='tools-heading'>
                    <h1>MY SKILLS</h1>
          <h2>My Toolbox & Things I Can Do</h2>
        </div>
        <div className='containers'>
          <div className='container1'><h3>HTML</h3></div>
          <div className='container2'><h3>CSS</h3></div>
          <div className='container3'><h3>JS</h3></div>
          <div className='container4'><h3>REACT JS</h3></div>

        </div>
            </div>

        </div >






    )
}

export default AboutPage