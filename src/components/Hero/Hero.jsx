import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, cta, intro } = hero;

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
      <section id="hero" className="jumbotron" style={{ display: 'flex', flexDirection: 'column' }}>

        <Container
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1',
            borderRadius: '10%',
            padding: '10em 0',
            marginTop: '10em',
          }}
        >
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h4 className="hero-subtitle">{intro || ''}</h4>
            <h1 className="hero-title">{title || ''}</h1>
            <h1 className="hero-title">
              I&apos;m a <span className="new-text-color">Full Stack Developer</span>{' '}
            </h1>
            <h1 className="hero-title">and Tech Enthusiast!</h1>
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
