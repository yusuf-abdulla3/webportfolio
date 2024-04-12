import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import ExperienceImg from '../Image/ExperienceImg';
import PortfolioContext from '../../context/context';
import VerticalTab from './VerticalTab/VerticalTab.jsx';
import resumeData from '../../mock/resumeData.js';


const Experience = () => {
  const { experience } = useContext(PortfolioContext);
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
        
        <VerticalTab data={resumeData.jobs} />

      {/* <div className="col-10">
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
            techStack,
          } = exp;

          return (
            <Row key={id} className="experience-wrapper" style={{ margin: '4rem 0' }}>
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
                      {paragraphOne || ''}
                    </li>
                    <li
                      className="about-wrapper__info-text"
                      style={{ marginBottom: '1.5em', fontSize: '1.5em' }}
                    >
                      {paragraphTwo || ''}
                    </li>
                    <li
                      className="about-wrapper__info-text"
                      style={{ marginBottom: '1.5em', fontSize: '1.5em' }}
                    >
                      {paragraphThree || ''}
                    </li>
                    <li
                      className="about-wrapper__info-text"
                      style={{ marginBottom: '1.5em', fontSize: '1.5em' }}
                    >
                      {paragraphFour || ''}
                    </li>

                    <p
                      className="about-wrapper__info-text new-text-color"
                      style={{
                        marginBottom: '1.5em',
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                      }}
                    >
                      {techStack || ''}
                    </p>
                  </div>
                </Fade>
              </Col>
            </Row>            
          );
        })}
        </div>
        </div> */}

      </Container>
    </section>
  );
};

export default Experience;
