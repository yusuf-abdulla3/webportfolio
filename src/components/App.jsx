import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  experienceData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [experience, setExperience] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperience({ ...experienceData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
      <Navbar
        sticky="top"
        variant="dark"
        style={{ backgroundColor: 'black', paddingBottom: '1em', marginBottom: '2em' }}
      >
        <Container>
          <Navbar.Brand href="#home" className="h1" style={{ color: 'white', fontSize: '2em' }}>
            Yusuf Abdulla
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#hero" style={{ color: 'white', fontSize: '2em' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: 'white', fontSize: '2em' }}>
              About
            </Nav.Link>
            <Nav.Link href="#projects" style={{ color: 'white', fontSize: '2em' }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'white', fontSize: '2em' }}>
              Contact
            </Nav.Link>
            <Nav.Link
              href="https://resume.creddle.io/resume/hotd8oqyo94"
              target="_blank"
              style={{ color: 'white', fontSize: '2em' }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <PortfolioProvider value={{ hero, about, experience, projects, contact, footer }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </>
  );
}

export default App;
