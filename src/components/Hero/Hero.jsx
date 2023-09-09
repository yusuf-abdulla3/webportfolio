import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import BackgroundVideo from '../../videos/background-video.mp4';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta } = hero;

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
        <Container>
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
              transform: 'translate(-50%, -50%)',
            }}
          >
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </Container>

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
            <h1 className="hero-title">
              {title || ''}
              <span className="new-text-color">{name || ''}</span>
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <div className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'More About Me'}
                </Link>
              </div>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default Header;
