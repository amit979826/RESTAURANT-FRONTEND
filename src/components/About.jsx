import React from 'react'
import {Link} from "react-router-dom";
import {HiOutlineArrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">

                <div className="top">
                    <h1 className="heading">ABOUT</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio maxime nam facilis, eum cumque corrupti aut nemo delectus iure, dolores adipisci quae eligendi unde quas. Expedita dolore deserunt incidunt, nostrum quidem consectetur quo commodi aut omnis labore unde hic eos tempore quod quas est doloremque iste possimus sint a harum.
                </p>
                <Link to={"/"}>
                Explore Menu{""} <span><HiOutlineArrowRight/></span>
                </Link>
            </div>

             <div className="banner">
                <img src="/about.png" alt="about" />
             </div>
        </div>
    </section>
  )
}

export default About
