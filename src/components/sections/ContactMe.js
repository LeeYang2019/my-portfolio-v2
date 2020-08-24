import React, { Fragment } from 'react';

const ContactMe = () => {
  return (
    <Fragment>
      <footer className="footer" id="contact">
        <h3>My Contact: </h3>
        <a
          href="https://drive.google.com/file/d/1qgHTtbL5catL7Gnn5Qe4jiqBXcdUXPYL/view?usp=sharing"
          className="demo_btn btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a
          href="mailto:ny2514@gmail.com"
          target="blank"
          className="footer__link"
        >
          ny2514@gmail.com
        </a>
      </footer>
    </Fragment>
  );
};

export default ContactMe;
