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
    <Navbar collapseOnSelect sticky="top" className="nav text-primary" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="#hero">
          <img src={logo} className="nav__logo" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" style={{ color: 'white' }} />
        <Navbar.Collapse id="navbarScroll" style={{ backgroundColor: 'black', width: '100%' }}>
          <Nav className={!isMobile ? 'mx-auto' : 'me-auto'}>
            <Nav.Link className="nav__items" href="#hero">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav__items">
              About
            </Nav.Link>
            <Nav.Link href="#experience" className="nav__items">
              Experience
            </Nav.Link>
            <Nav.Link href="#projects" className="nav__items">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="nav__items">
              Contact
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://drive.google.com/file/d/135I8sWoXo_W5fzR3_WXUOu4VC6nxDlSW/view?usp=sharing"
              className="nav__items"
            >
              Resume
            </Nav.Link>
            {isMobile && (
              <Nav.Link target="_blank" href="https://www.linkedin.com/in/yusuf-abdulla/">
                <i className="fa fa-linkedin fa-inverse fa-xl icon-size" />
              </Nav.Link>
            )}
            {isMobile && (
              <Nav.Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/yusuf-abdulla3"
              >
                <i className="fa fa-github fa-inverse icon-size" />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        {!isMobile && (
          <div className="icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/yusuf-abdulla/"
            >
              <i className="fa fa-linkedin fa-inverse fa-xl icon-size" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/yusuf-abdulla3"
            >
              <i className="fa fa-github fa-inverse icon-size" />
            </a>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
