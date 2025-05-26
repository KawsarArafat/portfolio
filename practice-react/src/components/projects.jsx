import React, { useState } from 'react'
import '../App.css'
import image2 from '../assets/waste.jpg'
import image1 from '../assets/image.png'
import picture from '../assets/picture.jpeg'
import venue from '../assets/venue.jpg'
import lpg from '../assets/lpg.jpg'

import car from '../assets/car.jpg'

const cardData = [
  {
    title: "Ambulance Management System",
    description: "Ensure timely medical assistance with our Ambulance Management System, designed to streamline emergency response and improve patient care.",
    details: [
      "Real-time tracking",
      "User-friendly interface",
      "Admin dashboard",
      "Responsive design",
      " Technology: : Java FX, SceneBuilder"
    ],
    image: image1,
    // link: "https://github.com/yourusername/galaxy-explorer"
  },
  {
    title: "EnviroLink",
    description: " A Smart Waste Management System leverages advanced technologies to enhance the efficiency, cost effectiveness, and sustainability of waste collection and disposal processes,",
    details: [
        "Route optimization",
        "User feedback system",
        "Data analytics",
        "Mobile-friendly",
        " Technology: HTML,CSS,JavaScript,Node Js,Express Js,Oracle"
    ],
    image: image2,
    // link: "https://github.com/yourusername/star-mapper"
  },
  {
    title: " VenueVista",
    description: " A playground booking system that offers us a user friendly and efficient platform to book playgrounds.",
    details: [
      "NASA image API integration",
      "Infinite scroll gallery",
      "Favorites & sharing",
      "Dark mode support",
      " Technology: Figma,HTML,CSS,JavaScript,Node Js,Express Js,MongoDB"
    ],
    image: venue,
    // link: "https://github.com/yourusername/cosmos-gallery"
  },
  {
    title: "LPG leakage detector",
    description: " The LPG Gas Leakage Detector using Arduino is an innovative safety device that swiftly detects LPG leaks, triggers an alarm, and automatically activates a fan to disperse the gas, ensuring maximum protection against potential hazards.",
    details: [
      "Real-time gas detection",
      "Alarm system",
      "Automatic fan activation",
      "Compact design",
      "Technology: Arduino, MQ-6 sensor, Buzzer, Fan"  
    ],
    image: lpg,
    // link: "https://github.com/yourusername/astro-news"
  },
  {
    title: " DIY Fire Fighting Robot",
    description: " The DIY Fire Fighting Robot is an innovative project that combines robotics and fire safety, designed to autonomously detect and extinguish small fires using sensors and a water spray mechanism.",
    details: [
      "Autonomous fire detection",
      "Water spray mechanism",
      "Compact design",
      "technology: Arduino, Flame sensor, Water pump, motor driver,cpp(language)"
    ],
    image: car,
    // link: "https://github.com/yourusername/rocket-launch-tracker"
  }
]

const Projects = () => {
  const [flipped, setFlipped] = useState(Array(cardData.length).fill(false))

  const handleFlip = idx => {
    setFlipped(f => f.map((val, i) => (i === idx ? !val : val)))
  }

  return (
    <div className='projects' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh' }}>
      <b>My Projects~</b>
      <div
        className='my_cards'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px 40px', // 32px row gap, 40px column gap
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: '32px',
          width: '100%'
        }}
      >
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`flip-card${flipped[idx] ? ' flipped' : ''}`}
            onClick={() => handleFlip(idx)}
            style={{
              cursor: 'pointer',
              marginBottom: '48px', // Add vertical gap under each card
              minHeight: '460px'
            }}
          >
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <div className="card" style={{
                  width: '300px',
                  height: '460px',
                  borderRadius: '18px',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                  background: 'linear-gradient(135deg, #e3eaff 60%, #f3f9ff 100%)',
                  overflow: 'hidden',
                  padding: 0
                }}>
                  <img
                    className="card-img-top"
                    src={card.image}
                    alt="Project preview"
                    style={{
                      width: '300px',
                      height: '180px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '18px',
                      borderTopRightRadius: '18px'
                    }}
                  />
                  <div className="card-body" style={{ padding: '1.5rem' }}>
                    <h5 className="card-title" style={{ fontSize: '1.4rem', color: '#1743d2', marginBottom: '0.5rem' }}>
                      {card.title}
                    </h5>
                    <p className="card-text" style={{ color: '#333', marginBottom: '1.2rem' }}>
                      {card.description}
                    </p>
                    <span style={{ color: '#1743d2', fontWeight: 600 }}>Click for details</span>
                  </div>
                </div>
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <div className="card" style={{
                  width: '300px',
                  borderRadius: '18px',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                  background: 'linear-gradient(135deg, #f3f9ff 60%, #e3eaff 100%)',
                  overflow: 'hidden',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%'
                }}>
                  <div className="card-body" style={{ padding: '1.5rem' }}>
                    <h5 className="card-title" style={{ fontSize: '1.4rem', color: '#1743d2', marginBottom: '0.5rem' }}>
                      Project Details
                    </h5>
                    <ul style={{ color: '#333', textAlign: 'left', marginBottom: '1.2rem', fontSize: '1rem' }}>
                      {card.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                    {/* Uncomment and update the link if you want */}
                    {/* <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        background: '#1743d2',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '10px 24px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'background 0.2s'
                      }}
                    >
                      View Project
                    </a> */}
                    <div style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>
                      Click to flip back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects