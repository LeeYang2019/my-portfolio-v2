import React from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';
import Header from './components/sections/Header';
import Introduction from './components/sections/Introduction';
import AboutMe from './components/sections/AboutMe';
import MyWork from './components/sections/MyWork';
import ContactMe from './components/sections/ContactMe';
import GithubState from './components/context/github/githubState';
import style from 'styled-components';

const Wrapper = style.div`
  width: 100%;
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

const App = () => {
  return (
    <div className="App">
      <GithubState>
        <Element>
          <Header />
        </Element>
        <Wrapper>
          <Element>
            <Introduction />
          </Element>
          <Element name="aboutMe">
            <AboutMe />
          </Element>
          <Element name="myWork">
            <MyWork />
          </Element>
        </Wrapper>
        <Element name="contactMe">
          <ContactMe />
        </Element>
      </GithubState>
    </div>
  );
}

export default App;
