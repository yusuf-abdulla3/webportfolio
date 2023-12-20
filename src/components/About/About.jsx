import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, resume } = about;

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
                <p className="about-wrapper__info-text">
                  Hello! I&apos;m Yusuf, a tech enthusiast who delved into coding early on,
                  exploring the world of HTML, CSS, and JavaScript. Fast forward, and I&apos;ve
                  become a passionate Full Stack Developer with over 2 years of experience,
                  specializing in transforming intricate concepts into user-friendly solutions.
                </p>
                <p className="about-wrapper__info-text">
                  From spearheading several critical full-stack projects during my time at BBE
                  Expediting Ltd to leveraging a tech arsenal featuring JavaScript, React, Python,
                  Django, and more, I thrive on delivering high-quality software with a touch of
                  creativity. Currently seeking new opportunities to continue building meaningful
                  and user-centric products, I bring a cheerful demeanor and a commitment to
                  excellence to any team.
                </p>
                <p className="about-wrapper__info-text">
                  Ready to infuse your projects with my tech magic, let&apos;s collaborate and
                  create coding wonders together! 🚀{' '}
                </p>
                <p className="about-wrapper__info-text" style={{ margin: '2em 0' }}>
                  Some of the technologies, I have experience using are:
                </p>
                <div className="tech-stack">
                  <span>
                    <i id="js-icon" className="devicon-javascript-plain tech-stack-icon" />
                    <span htmlFor="js-icon">Javascript</span>
                  </span>

                  <span>
                    <i id="ts-icon" className="devicon-typescript-plain tech-stack-icon" />
                    <span htmlFor="ts-icon">Typescript</span>
                  </span>

                  <span>
                    <i id="python-icon" className="devicon-python-plain-wordmark tech-stack-icon" />
                    <span htmlFor="python-icon">Python</span>
                  </span>

                  <span>
                    <i id="ruby-icon" className="devicon-ruby-plain-wordmark tech-stack-icon" />
                    <span htmlFor="ruby-icon">Ruby</span>
                  </span>

                  <span>
                    <i
                      id="react-icon"
                      className="devicon-react-original-wordmark tech-stack-icon"
                    />
                    <span htmlFor="react-icon">React</span>
                  </span>

                  <span>
                    <i id="redux-icon" className="devicon-redux-original tech-stack-icon" />
                    <span htmlFor="redux-icon">Redux</span>
                  </span>

                  <span>
                    <i id="django-icon" className="devicon-django-plain-wordmark tech-stack-icon" />
                    <span htmlFor="django-icon">Django</span>
                  </span>

                  <span>
                    <i
                      id="express-icon"
                      className="devicon-express-original-wordmark tech-stack-icon"
                    />
                    <span htmlFor="express-icon">Express</span>
                  </span>

                  <span>
                    <i id="rails-icon" className="devicon-rails-plain-wordmark tech-stack-icon" />
                    <span htmlFor="rails-icon">Rails</span>
                  </span>

                  <span>
                    <i id="html-icon" className="devicon-html5-plain-wordmark tech-stack-icon" />
                    <span htmlFor="html-icon">HTML</span>
                  </span>

                  <span>
                    <i id="css-icon" className="devicon-css3-plain-wordmark tech-stack-icon" />
                    <span htmlFor="css-icon">CSS</span>
                  </span>

                  <span>
                    <i id="mocha-icon " className="devicon-mocha-plain tech-stack-icon" />
                    <span htmlFor="mocha-icon">Mocha</span>
                  </span>

                  <span>
                    <i
                      id="bootstrap-icon"
                      className="devicon-bootstrap-plain-wordmark tech-stack-icon"
                    />
                    <span htmlFor="bootstrap-icon">Bootstrap</span>
                  </span>

                  <span>
                    <i
                      id="tailwind-icon"
                      className="devicon-tailwindcss-original-wordmark tech-stack-icon"
                    />
                    <span htmlFor="tailwind-icon">Tailwind</span>
                  </span>

                  <span>
                    <i
                      id="psql-icon"
                      className="devicon-postgresql-plain-wordmark tech-stack-icon"
                    />
                    <span htmlFor="psql-icon">PostgreSQL</span>
                  </span>

                  <span>
                    <i id="msql-icon" className="devicon-mysql-plain-wordmark tech-stack-icon" />
                    <span htmlFor="msql-icon">MySQL</span>
                  </span>

                  <span>
                    <i id="sqlite-icon" className="devicon-sqlite-plain-wordmark tech-stack-icon" />
                    <span htmlFor="sqlite-icon">SQLite</span>
                  </span>

                  <span>
                    <i
                      id="mongodb-icon"
                      className="devicon-mongodb-plain-wordmark tech-stack-icon"
                    />
                    <span htmlFor="mongodb-icon">MongoDB</span>
                  </span>

                  <span>
                    <i id="redis-icon" className="devicon-redis-plain-wordmark tech-stack-icon" />
                    <span htmlFor="redis-icon">Redis</span>
                  </span>

                  <span>
                    <i id="jquery-icon" className="devicon-jquery-plain-wordmark tech-stack-icon" />
                    <span htmlFor="jquery-icon">jQuery</span>
                  </span>

                  <span>
                    <i id="gatsby-icon" className="devicon-gatsby-plain-wordmark tech-stack-icon" />
                    <span htmlFor="gatsby-icon">Gatsby</span>
                  </span>

                  <span>
                    <i
                      id="github-icon"
                      className="devicon-github-original-wordmark tech-stack-icon"
                    />
                    <span htmlFor="github-icon">Github</span>
                  </span>

                  <span>
                    <i id="figma-icon" className="devicon-figma-plain tech-stack-icon" />
                    <span htmlFor="figma-icon">Figma</span>
                  </span>

                  <span>
                    <i id="jest-icon" className="devicon-jest-plain tech-stack-icon" />
                    <span htmlFor="jest-icon">Jest</span>
                  </span>

                  <span>
                    <i id="pytest-icon" className="devicon-pytest-plain-wordmark tech-stack-icon" />
                    <span htmlFor="pytest-icon">Pytest</span>
                  </span>

                  <span>
                    <i
                      id="rspec-icon"
                      className="devicon-rspec-original-wordmark tech-stack-icon"
                    />
                    <span htmlFor="rspec-icon">Rspec</span>
                  </span>

                  <span>
                    <i
                      id="storybook-icon"
                      className="devicon-storybook-plain-wordmark tech-stack-icon"
                    />
                    <span htmlFor="storybook-icon">Storybook</span>
                  </span>

                  <span>
                    <i
                      id="vagrant-icon"
                      className="devicon-vagrant-plain-wordmark tech-stack-icon"
                    />
                    <span htmlFor="vagrant-icon">Vagrant</span>
                  </span>
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
