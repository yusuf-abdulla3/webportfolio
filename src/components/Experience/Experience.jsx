import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ExperienceImg from '../Image/ExperienceImg';
import PortfolioContext from '../../context/context';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);
  // const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour } = experience;

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
    <section id="experience">
      <Container>
        <Title title="Experience" />
        {experience.map((exp) => {
          const {
            id,
            companyName,
            occupation,
            startDate,
            endDate,
            img,
            paragraphOne,
            paragraphTwo,
            paragraphThree,
            paragraphFour,
          } = exp;

          return (
            <Row key={id} className="experience-wrapper">
              <Col md={6} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <p className="h1"> {companyName}</p>
                  <p
                    className="h3"
                    style={{
                      color: 'white',
                      marginBottom: '2em',
                    }}
                  >
                    {occupation} — {startDate} - {endDate}
                  </p>
                  <div className="experience-wrapper__image">
                    <ExperienceImg alt="profile picture" filename={img} />
                  </div>
                </Fade>
              </Col>
              <Col md={6} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="about-wrapper__info">
                    <li
                      className="about-wrapper__info-text"
                      style={{ marginBottom: '1.5em', fontSize: '1.5em' }}
                    >
                      {paragraphOne ||
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                    </li>
                    <li
                      className="about-wrapper__info-text"
                      style={{ marginBottom: '1.5em', fontSize: '1.5em' }}
                    >
                      {paragraphTwo ||
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                    </li>
                    <li
                      className="about-wrapper__info-text"
                      style={{ marginBottom: '1.5em', fontSize: '1.5em' }}
                    >
                      {paragraphThree ||
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                    </li>

                    <p
                      className="about-wrapper__info-text"
                      style={{
                        marginBottom: '1.5em',
                        fontSize: '1.5em',
                        color: 'red',
                        fontWeight: 'bold',
                      }}
                    >
                      {paragraphFour || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                    </p>
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Experience;
