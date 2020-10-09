import React from 'react';
import style from 'styled-components';

const Wrapper = style.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 992px) {
    max-width: 1200px;
  }
  @media (min-width: 768px) {
    min-width: 720px;
  }
  @media (min-width: 576px) {
    min-width: 540px
  }
`;

const RowDiv = style.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 100px;
`;

const AboutDiv = style.div`
  margin-top: 50px;
  float: left;

  & > h3 {
    border-bottom: 1px solid white;
  }
`;

const Technologies = style.div`
  margin-top: 10px;

  & > i {
    margin: 15px;
  }

`;

const AboutMe = () => {

  return (
  <Wrapper>
    <RowDiv>
      <section>
        <div className="col-lg-12 col-sm-12">
            <AboutDiv>
            <h2 className="section__title section__title--about">Who I am</h2>
              <p>
                I am an aspiring software developer with several years of experience
                working as a business analyst. Having that sort of exposure has
                cultivated in me an interest and passion for software development.
              </p>
              <a
                href="https://drive.google.com/file/d/1qgHTtbL5catL7Gnn5Qe4jiqBXcdUXPYL/view?usp=sharing"
                className="demo_btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </AboutDiv>
        </div>
        <div className="col-lg-7 col-sm-12">
          <AboutDiv>
            <h3 className="section__title section__title--about">Technologies I have Experience  With</h3>
            <Technologies>
            <i class="fab fa-js"></i>
            <i class="fab fa-java"></i>
            <i className="fab fa-node-js"></i>
            <i className="fab fa-react"></i>
            <i class="fab fa-aws"></i>
            </Technologies>
          </AboutDiv>
        </div>
      </section>
    </RowDiv>
  </Wrapper>);
}
 

export default AboutMe;
