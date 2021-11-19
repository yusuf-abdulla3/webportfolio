import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import BackgroundVideo from '../../videos/background-video.mp4';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, fieldname, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <section id="hero" className="jumbotron">
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              <span className="new-text-color">{name || 'Your Name'}</span>
              <br />
              {subtitle || "I'm An Aspiring Web Developer."}
              <span className="new-text-color">{fieldname || 'Web Development'}</span>
              <br />
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'More About Me'}
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default Header;
