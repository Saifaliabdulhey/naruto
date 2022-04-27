import React from 'react'
import Footer from './Footer';
import email from '../images/email.png'
import mail from '../images/mail.png'
// import mail from '../images/mail.png'
import img from '../images/body-photo.svg'
import phone from '../images/phone.png';
import location from '../images/location.png';
import discord_2 from '../images/discord_s.png';


function Contact() {
  return (
    <div className="project-container">
      <div className="container">
        <div className="content-container">
          <div className="project-content">
            <div className="projects-img">
              <img className="contact-img" src={email} alt="Project" />
            </div>
            <div className="project-title">
              <h1>Hi THERE!</h1>
              <h2>You can reach me out on any platform you have.</h2>
              <p>I'm active all the time! just send me a message then I'll call you.
                Type whatever you want then just hit send by any social media platform
                you have from the platforms which I had down blow or up above in the navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="body-content content-container">
        <div className="contact-list">
          <h1>FEEL FREE TO ASK ME!</h1>
          <p>Actually I'm here not only to build a website
            i can build a PC, So if you have any questions just ask whatever you want!
            I am so exited to help you about any thing just send me a message then you got my help!</p>
        </div>
        <div className="body-img">
          <img src={img} />
        </div>
      </div>

      <div className="mail-list content-container">
        <div className="mail-info">
          <img src={mail} />
          <h3>
            MAIL ME:
          </h3>
          <p>jspz887@gmail.com</p>
        </div>

        <div className="mail-info">
          <img src={phone} />
          <h3>
            PHONE ME:
          </h3>
          <p>+9647729488987</p>
        </div>

        <div className="mail-info">
          <img src={discord_2} />
          <h3>
            DISCORD:
          </h3>
          <p>saifaliabdulhey87#7722</p>
        </div>
        <div className="mail-info">
          <img src={location} />
          <h3>
            LOCATION:
          </h3>
          <p>IRAQ / BASRA</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact