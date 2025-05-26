import React from 'react'
import '../App.css'

const myInfo = () => {
return (
    <div className="my_info">
        <div className="my_details">
            <h3>
                Hi, I'm <b>Md.Kawsar Arafat</b>!
            </h3>
            <p className="full">Full Stack Developer</p>
            <p>
                With a strong foundation in HTML, CSS, and JavaScript, I strive to build user-friendly interfaces that enhance the user experience.
            </p>
            <p>
                My expertise extends to backend development, where I utilize Node.js and Express.js to create robust server-side applications.
            </p>
            <p>
                Additionally, I am proficient in database management with MongoDB, ensuring efficient data storage and retrieval.
            </p>
            <div className="add_pic">
                <div className="add_button">
                    <button className="download_button1">
                        
                        
                        <a
                             href="/src/assets/myCv.pdf"
                              download="Kawsar_Arafat_CV.pdf"
                             className="download_button1">
                             Download CV
                        </a>
                        
                        
                        
                        
                        
                    </button>



                    {/* <button className="download_button2">Contact</button> */}
                </div>
            </div>
        </div>
        <div className="my_picture_">
            
        </div>
        
    </div>
)
}

export default myInfo


