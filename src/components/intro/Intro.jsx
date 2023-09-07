import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/Maksym Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Maksym Prokhnitskyi" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p style={{ textAlign: 'justify' }}>
          &nbsp;&nbsp; As an experienced developer with a strong foundation in React, Laravel, WordPress, and Node, 
          I take a comprehensive approach to web development and design. My proficiency in various technologies empowers me to create applications that are scalable, efficient, and secure, meeting the most rigorous client requirements. My vast experience in React, Laravel, and Node have granted me the aptitude to develop engaging and interactive web applications that deliver an immersive user experience. My enthusiasm for crafting technology solutions prompts me to have confidence in my ability to make a worthwhile contribution to any development project.
<br/><br/>
Why me?
<br/>
<br/>
&nbsp;&nbsp;The best price<br/>
&nbsp;&nbsp;The highest quality<br/>
&nbsp;&nbsp;Great Communication skill<br/>
&nbsp;&nbsp;Long term free support<br/>
&nbsp;&nbsp;Free consultation<br/>
&nbsp;&nbsp;On time delivery
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
