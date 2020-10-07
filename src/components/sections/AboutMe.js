import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <section className="about-me">
        <h2 className="section__title section__title--about">Who I am</h2>
        <div className="about-me__body">
          <p>
            I am an aspiring software developer with several years of experience
            working as a business analyst. Having that sort of exposure has
            cultivated in me an interest and passion for software development.
          </p>
          <a
            href="x"
            className="demo_btn btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
