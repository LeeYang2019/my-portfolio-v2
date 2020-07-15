import React, { Fragment } from 'react';

const ContactMe = () => {
  return (
    <Fragment>
      <footer className="footer" id="contact">
        <a
          href="mailto:ny2514@gmail.com"
          target="blank"
          className="footer__link"
        >
          ny2514@gmail.com
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://github.com/LeeYang2019"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.facebook.com/people/Nyiajlim-Lee-Yang/8632742"
            >
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/nhialee-yang-b07649181/"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};

export default ContactMe;
