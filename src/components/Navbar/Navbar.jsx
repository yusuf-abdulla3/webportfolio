import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/yusuf-logo.png';
// import '../../style/sections/_navbar.scss'

const AppNavbar = () => {
  // navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });
  return (
    <Navbar
      variant="primary"
      sticky="top"
      style={{ backgroundColor: 'none' }}
      className={navbar ? 'navbar active' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="nav__logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link style={{ fontWeight: 'bold' }} className="nav--item" href="#hero">
            Home
          </Nav.Link>
          <Nav.Link style={{ fontWeight: 'bold' }} href="#about">
            About
          </Nav.Link>
          <Nav.Link style={{ fontWeight: 'bold' }} href="#experience">
            Experience
          </Nav.Link>
          <Nav.Link style={{ fontWeight: 'bold' }} href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link style={{ fontWeight: 'bold' }} href="#contact">
            Contact
          </Nav.Link>
          <Nav.Link
            style={{ fontWeight: 'bold' }}
            href="https://resume.creddle.io/resume/hotd8oqyo94"
            target="_blank"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
