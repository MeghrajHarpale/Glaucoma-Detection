import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { TbCheckupList } from "react-icons/tb";
import { LiaRobotSolid } from "react-icons/lia";
import { FaHospitalAlt } from "react-icons/fa";
import { AiTwotoneFund } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlinePushpin } from "react-icons/ai";

const Services = () => {
  return (
    <div>
      <section id="services" className="services">
        <h1 className="heading">our <span>services</span></h1>
        <div className="box-container">
            <div className="box">
                <i><TbCheckupList /></i>
                <h3>free checkups</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt architecto laudantium explicabo quas perferendis laborum quia, animi numquam ea illo excepturi.</p>
                <a href="/" className='btn'>learn more <span><FaArrowRight/></span></a>
            </div>

            <div className="box">
                <i><AiOutlinePushpin /></i>
                <h3>24/7 Available</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt architecto laudantium explicabo quas perferendis laborum quia, animi numquam ea illo excepturi.</p>
                <a href="/" className='btn'>learn more <span><FaArrowRight/></span></a>
            </div>

            <div className="box">
                <i><AiTwotoneFund /></i>
                <h3>99.99% Accuracy</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt architecto laudantium explicabo quas perferendis laborum quia, animi numquam ea illo excepturi.</p>
                <a href="/" className='btn'>learn more <span><FaArrowRight/></span></a>
            </div>

            <div className="box">
                <i><LiaRobotSolid /></i>
                <h3>ChatBot Feature</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt architecto laudantium explicabo quas perferendis laborum quia, animi numquam ea illo excepturi.</p>
                <a href="/" className='btn'>learn more <span><FaArrowRight/></span></a>
            </div>

            <div className="box">
                <i><FaHospitalAlt /></i>
                <h3>Nearest Hospital Locators</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt architecto laudantium explicabo quas perferendis laborum quia, animi numquam ea illo excepturi.</p>
                <a href="/" className='btn'>learn more <span><FaArrowRight/></span></a>
            </div>

            <div className="box">
                <i><AiOutlineSchedule /></i>
                <h3>Instant Result</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt architecto laudantium explicabo quas perferendis laborum quia, animi numquam ea illo excepturi.</p>
                <a href="/" className='btn'>learn more <span><FaArrowRight/></span></a>
            </div>

            
        </div>
      </section>
    </div>
  )
}

export default Services
