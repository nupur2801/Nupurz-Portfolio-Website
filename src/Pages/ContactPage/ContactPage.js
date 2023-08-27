import React from 'react'

import './ContactPage.css'

function ContactPage() {
  return (
    <div className='contactpage-main-container'>
      <div className='contactpage-subcontainer'> 
      <div className='contact-first-section'>
        <h1> GET IN <span>TOUCH</span> !</h1>
        <p>Dropping a line to say g’day, ask for my resume <br></br>or see if we can build something amazing together? <br></br>I’d love to hear from you!</p>
        
        <p>Mail Me : <br></br> <span>nupurpatel602@gmail.com</span></p>
        <p>Contact Me : <br></br><span>8401702801</span> </p>
        

      </div>
      <div className='contact-second-section'>
        <h1>CONTACT <span>ME</span></h1>
        <form>
        <input type="text" name="name" placeholder='Name'></input>
        <input type="email" name="email" placeholder='Email'></input>
        <input type='number' name='phonenumber' placeholder='Phone Number'></input>
        <button>Send Mail</button>
        
          
        </form>

      </div>

      </div>
      

    </div>
  )
}

export default ContactPage