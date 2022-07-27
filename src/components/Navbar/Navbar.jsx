import React from 'react';
import logo from '../../images/yusuf-logo.png';

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <img className="nav__logo" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="nav__items">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://resume.creddle.io/resume/hotd8oqyo94" target="_blank" rel="noreferrer">
            Resume
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
