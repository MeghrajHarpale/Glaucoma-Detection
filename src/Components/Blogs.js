import React from 'react'
import Blog1 from '../images/blog1.jpeg'
import Blog2 from '../images/blog2.jpeg'
import Blog3 from '../images/blog3.jpeg'
import { FaArrowRight } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


const Blogs = () => {
    return (
        <div>
            <secion id="blogs" className="blogs">
                <h1 className="heading">Blogs on <span>Glaucoma</span></h1>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src={Blog1} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="/"><i><FaRegCalendarAlt /></i>1st March,2024</a>
                                <a href="/"><i><FaUserAlt /></i>by Admin</a>
                            </div>
                            <h3>Blog Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsa, dolore consectetur quaerat corporis voluptas aliquam aliquid officiis modi omnis.</p>
                            <a href="/" className='btn'>learn more <span><FaArrowRight /></span></a>
                        </div>
                    </div>


                    <div className="box">
                        <div className="image">
                            <img src={Blog2} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="/"><i><FaRegCalendarAlt /></i>1st March,2024</a>
                                <a href="/"><i><FaUserAlt /></i>by Admin</a>
                            </div>
                            <h3>Blog Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsa, dolore consectetur quaerat corporis voluptas aliquam aliquid officiis modi omnis.</p>
                            <a href="/" className='btn'>learn more <span><FaArrowRight /></span></a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={Blog3} alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="/"><i><FaRegCalendarAlt /></i>1st March,2024</a>
                                <a href="/"><i><FaUserAlt /></i>by Admin</a>
                            </div>
                            <h3>Blog Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsa, dolore consectetur quaerat corporis voluptas aliquam aliquid officiis modi omnis.</p>
                            <a href="/" className='btn'>learn more <span><FaArrowRight /></span></a>
                        </div>
                    </div>
                </div>
            </secion>
        </div>
    )
}

export default Blogs
