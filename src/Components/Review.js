import React from 'react'
import UserImg from '../images/th (3).jpeg'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Review = () => {
    return (
        <div>
            <section id="review" className="review">
                <h1 className="heading">User's <span>review</span></h1>
                <div className="box-container">
                    <div className="box">
                        <img src={UserImg} alt="" />
                        <h3>John deo</h3>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><CiStar /></i>
                        </div>
                        <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum iste quo ullam nisi, et praesentium voluptate odio, nemo voluptatem officiis ipsum odit harum at.</p>

                    </div>

                    <div className="box">
                        <img src={UserImg} alt="" />
                        <h3>John deo</h3>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><CiStar /></i>
                        </div>
                        <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum iste quo ullam nisi, et praesentium voluptate odio, nemo voluptatem officiis ipsum odit harum at.</p>
                        
                    </div>

                    <div className="box">
                        <img src={UserImg} alt="" />
                        <h3>John deo</h3>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><CiStar /></i>
                        </div>
                        <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum iste quo ullam nisi, et praesentium voluptate odio, nemo voluptatem officiis ipsum odit harum at.</p>
                        
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Review
