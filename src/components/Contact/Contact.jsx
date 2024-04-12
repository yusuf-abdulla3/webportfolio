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
              I&apos;m currently seeking new opportunities in the tech industry. I&apos;m passionate about using my skills and experience, whether it&apos;s building innovative web applications, analyzing data, or exploring emerging technologies. I thrive in collaborative environments and am eager to learn and grow alongside a talented team.
            </p>

            <p className="contact-wrapper__text" style={{ marginTop: '1.5em' }}>
            Feel free to reach out anytime using the information below. I&apos;d love to connect and discuss how I can contribute to your organization&apos;s success.

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
