import React from 'react'
import { FaQuestion } from "react-icons/fa";<FaQuestion />

const Showcase = () => {
  return (
    <div>
      <section className="icons-container">
        <div className="icons">
            <i><FaQuestion /></i>
            <h3>140+</h3>
            <p>Doctors at Work</p>
        </div>

        <div className="icons">
            <i><FaQuestion /></i>
            <h3>1040+</h3>
            <p>Satisfied Patients</p>
        </div>

        <div className="icons">
            <i><FaQuestion /></i>
            <h3>500+</h3>
            <p>Bed Facility</p>
        </div>

        <div className="icons">
            <i><FaQuestion /></i>
            <h3>80+</h3>
            <p>Available Hospitals</p>
        </div> 
      </section>
    </div>
  )
}

export default Showcase
