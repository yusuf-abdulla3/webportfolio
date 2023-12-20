import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Let's Connect!" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              I&apos;m actively exploring opportunities within the world of tech! Whether it
              involves crafting innovative web applications, delving into analytics, or venturing
              into uncharted territories, I&apos;m eager to channel my skills and enthusiasm into a
              collaborative environment.
            </p>

            <p className="contact-wrapper__text" style={{ marginTop: '1.5em' }}>
              Feel free to contact me at anytime using the buttons below. Let&apos;s embark on a
              journey of discovery and create technological wonders together!
            </p>

            <div className="contact__icons">
              <a target="_blank" rel="noopener noreferrer" href={email ? `mailto:${email}` : ''}>
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/yusuf-abdulla/"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/yusuf-abdulla3/"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
