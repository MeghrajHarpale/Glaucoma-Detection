import React from 'react'
import EyeImg from '../images/OIP.jpeg'
// import Main2 from './Main2';
import { FaArrowRight } from "react-icons/fa";

const Main1 = () => {
    return (
        <div>
            <section id="home" className="home">

                <div className="image">
                    <img src={EyeImg} alt="" />
                </div>


                <div className="content">
                    <h3>Stay Safe, Stay Healthy</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ad a, obcaecati asperiores exercitationem recusandae autem nihil nulla numquam nesciunt eveniet nostrum sint sed.</p>
                    <a href="/" className='btn' >contact us <span className='fas fa-chevron-right'><FaArrowRight /></span></a>
                </div>
            </section>
        </div>
    )
}

export default Main1
