import React, { Fragment } from 'react';
import NhialeeImg from '../../resources/images/Nhialee2.jpg';

const Introduction = () => {
  return (
    <Fragment>
      <section className="intro" id="home">
        <h1 className="section__titles section__title--intro">
          Hi, I am <strong>Nhialee Yang</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          full-stack dev
        </p>
        <img src={NhialeeImg} alt="Nhialee" className="intro__image" />
      </section>
    </Fragment>
  );
};

export default Introduction;
