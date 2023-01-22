import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperience([...experienceData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
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
