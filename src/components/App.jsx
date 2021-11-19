import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About, { resume } from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Link } from 'react-scroll';
import {Navbar, Container, Nav} from 'react-bootstrap';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
    <Navbar sticky = "top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Yusuf Abdulla</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#hero">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="https://resume.creddle.io/resume/hotd8oqyo94" target = '_blank'>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </>
  );
}

export default App;
