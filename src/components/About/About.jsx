import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne || ''}</p>
                <p className="about-wrapper__info-text">{paragraphTwo || ''}</p>
                <p className="about-wrapper__info-text">{paragraphThree || ''}</p>
                <p className="about-wrapper__info-text" style={{ margin: '2em 0' }}>
                  Some of the technologies, I have experience using are:{' '}
                </p>
                <div className="tech-stack">
                  <i className="devicon-javascript-plain tech-stack-icon" />
                  <i className="devicon-typescript-plain tech-stack-icon" />
                  <i className="devicon-python-plain-wordmark tech-stack-icon" />
                  <i className="devicon-ruby-plain-wordmark tech-stack-icon" />
                  <i className="devicon-react-original-wordmark tech-stack-icon" />
                  <i className="devicon-redux-original tech-stack-icon" />
                  <i className="devicon-django-plain-wordmark tech-stack-icon" />
                  <i className="devicon-express-original-wordmark tech-stack-icon" />
                  <i className="devicon-rails-plain-wordmark tech-stack-icon" />
                  <i className="devicon-html5-plain-wordmark tech-stack-icon" />
                  <i className="devicon-css3-plain-wordmark tech-stack-icon" />
                  <i className="devicon-mocha-plain tech-stack-icon" />
                  <i className="devicon-bootstrap-plain-wordmark tech-stack-icon" />
                  <i className="devicon-tailwindcss-original-wordmark tech-stack-icon" />
                  <i className="devicon-postgresql-plain-wordmark tech-stack-icon" />
                  <i className="devicon-mysql-plain-wordmark tech-stack-icon" />
                  <i className="devicon-sqlite-plain-wordmark tech-stack-icon" />
                  <i className="devicon-mongodb-plain-wordmark tech-stack-icon" />
                  <i className="devicon-redis-plain-wordmark tech-stack-icon" />
                  <i className="devicon-jquery-plain-wordmark tech-stack-icon" />
                  <i className="devicon-gatsby-plain-wordmark tech-stack-icon" />
                  <i className="devicon-github-original-wordmark tech-stack-icon" />
                  <i className="devicon-figma-plain tech-stack-icon" />
                  <i className="devicon-jest-plain tech-stack-icon" />
                  <i className="devicon-pytest-plain-wordmark tech-stack-icon" />
                  <i className="devicon-rspec-original-wordmark tech-stack-icon" />
                  <i className="devicon-storybook-plain-wordmark tech-stack-icon" />
                  <i className="devicon-vagrant-plain-wordmark tech-stack-icon" />
                </div>
                {resume && (
                  <span className="d-flex my-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
