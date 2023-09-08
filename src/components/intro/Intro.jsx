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
              <small>4 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p style={{ textAlign: 'justify' }}>
          &nbsp;&nbsp; As a highly skilled Full stack developer with 4 years, I've worked on a lot of multiple challenging projects, including requirements gathering, development and maintenance.
Efficiency and quality are at the core of my work.
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
