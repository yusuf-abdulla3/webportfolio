import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import AppNavbar from './Navbar/Navbar';

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
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperience([...experienceData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setTimeout(() => setLoader(false), 3000);
  }, []);

  return (
    <>
      {loader && (
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '2',
            position: 'fixed',
            padding: '0',
            margin: '0',
            top: '0',
            left: '0',
            minWidth: '100%',
            minHeight: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
          }}
        >
          <span className="loader" />
        </Container>
      )}

      <AppNavbar />
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
