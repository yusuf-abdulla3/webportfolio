import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useMediaQuery } from 'react-responsive';
import logo from '../../images/yusuf-logo.png';

const AppNavbar = () => {
  // navbar scroll when active state
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <Navbar variant="primary" sticky="top" className="nav">
      <Container>
        {isMobile ? (
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
          </Nav>
        ) : (
          <>
            <Navbar.Brand href="#home">
              <img className="nav__logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
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
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
