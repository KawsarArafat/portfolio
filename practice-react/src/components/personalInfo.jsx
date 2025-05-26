import React from 'react'
import '../App.css'

const personalInfo = () => {
  return (
    <div className="about_me">
        <div className="first_phase">
            <div>
                <h3>- NICE TO SEE YOU HERE!</h3>
                <b>About Me</b><br/><br/>
            </div>
            <div>
              <span>
                Hello there! My name is Kawsar Arafat. I prefer to call myself a Frontend Focused Full Stack Developer. and I’m very passionate and dedicated to my work.
              </span>
              <br /><br/>
              <span>
                I am now styding in CSE at Military Institution of Sceince and Technology.
              </span>
              <br /><br/>
              <span>
                I like all of the learning opportunities that have come to me. I have a vision of one day starting my own business.
              </span>
            </div>
        </div>

        <div className="second_phase">

          <div className="box1"> <p><span className='month'>1 Month </span><br/> <b className='exp'>Experinence</b></p></div>
          <div className="box2"> <p><span className='month'>5 Plus </span><br/> <b className='exp'>Projects</b></p></div>
          <div className="box3"> <p><span className='month'>1 Month </span><br/> <b className='exp'>Experinence</b></p></div>

        </div>
        
    </div>
  )
}

export default personalInfo