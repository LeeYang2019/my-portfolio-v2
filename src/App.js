import React from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';
import Header from './components/sections/Header';
import Introduction from './components/sections/Introduction';
import AboutMe from './components/sections/AboutMe';
import MyWork from './components/sections/MyWork';
import ContactMe from './components/sections/ContactMe';
import GithubState from './components/context/github/githubState';

function App() {
  return (
    <div className="App">
      <GithubState>
        <Element>
          <Header />
        </Element>
        <Element>
          <Introduction />
        </Element>
        {/* <Element name="aboutMe">
          <AboutMe />
        </Element> */}
        <Element name="myWork">
          <MyWork />
        </Element>
        <Element name="contactMe">
          <ContactMe />
        </Element>
      </GithubState>
    </div>
  );
}

export default App;
