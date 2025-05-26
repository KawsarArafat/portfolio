import React from 'react'
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const options = () => {

    const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className='my_options'>
        
        <div className="choose_options">
            <div className="my_picture ">
                
            
            </div>

            <h2 className='name'>𝑴𝒅. 𝑲𝒂𝒘𝒔𝒂𝒓 𝑨𝒓𝒂𝒇𝒂𝒕</h2>
            <button type="button" className="btn btn-outline-success" onClick={() => scrollToSection('home')}>H𝗈𝗆𝖾</button>
            <button type="button" className="btn btn-outline-success" onClick={() => scrollToSection('about')}>About</button>
            <button type="button" className="btn btn-outline-success" onClick={() => scrollToSection('skills')}>Skills</button>
            <button type="button" className="btn btn-outline-danger" onClick={() => scrollToSection('projects')}>Projects</button>
            <button type="button" className="btn btn-outline-warning" onClick={() => scrollToSection('contact')}>Contact</button>
            <div className="social_media">
              <div className="face"><a href='https://www.facebook.com/share/16M6DtUta8/' target='blank'><FontAwesomeIcon icon={faFacebook} /></a></div>
              <div className="insta"><a href='https://www.instagram.com/kawsar_arafat_?utm_source=qr&igsh=MXY2dGdzY3Y1YWprcg==' target='blank'><FontAwesomeIcon icon={faInstagram} /></a></div>
              <div className="linked"><FontAwesomeIcon icon={faLinkedin} /></div>

            </div>
            </div>
        
    </div>
  )
}

export default options