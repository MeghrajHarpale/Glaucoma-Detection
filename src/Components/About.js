import React from 'react'
import EyeImg from '../images/OIP.jpeg'
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <h1 className="heading"><span>about</span>us</h1>
                <div className="row">
                    <div className="image">
                        <img src={EyeImg} alt="" />
                    </div>

                    <div className="content">
                        <h3>we check your Eye</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas adipisci repudiandae iure? Accusamus, excepturi optio! Qui modi quisquam velit, reiciendis, praesentium sed ea tenetur, illo corrupti explicabo quas nostrum. Culpa vero, unde dolor distinctio deleniti sequi consequuntur sit accusamus placeat consectetur. Repudiandae illo, labore dignissimos cupiditate blanditiis, incidunt vero ipsam sequi, ipsa voluptatum porro enim ducimus. Eaque consectetur eligendi totam officia, odio exercitationem error aspernatur culpa ducimus eos ratione dolorum veniam quae optio sit eum eius impedit voluptatem beatae dolorem deserunt cupiditate quisquam deleniti iusto. Numquam quo perspiciatis exercitationem culpa!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos non laboriosam eum molestiae fugit ea est, dolor qui, sequi dolorum numquam. Esse distinctio eius, mollitia deserunt delectus quasi dicta accusamus aperiam. Odit fugit blanditiis fuga, obcaecati in numquam sed alias rerum totam repellat eum voluptatibus veniam doloremque quas quis tempore deleniti. Optio delectus unde libero.</p>
                        <a href="/" className='btn'>  learn more <span><FaArrowRight/></span></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
