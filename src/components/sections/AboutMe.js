import React from 'react';
import NhialeeImg2 from '../../resources/images/nhialee.jpg';

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <section className="about-me">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
          Developer based out of Toronto
        </p>

        <div className="about-me__body">
          <p>
            I am a business Analyst with several years of experience in IT. I
            enjoy working with stakeholders and reading business logic diagrams
            and performing user acceptance testing. Having that sort of exposure
            has cultivated in me an interest and passion for software
            development.
          </p>
          <p>I have experience programming in Java, JavaScript, Php and C.</p>
          <p>I am an avid hiker and enjoy building things with my hands.</p>
        </div>

        <img
          src={NhialeeImg2}
          alt="Nhialee sitting on step"
          className="about-me__img"
        />
      </section>
    </div>
  );
};

export default AboutMe;
