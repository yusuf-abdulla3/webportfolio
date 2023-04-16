import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Col } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectCard from './Card';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <Grid container spacing={10} className="project-wrapper__container">
            {projects.map((project) => {
              const { title, info, info2, url, deployedUrl, img, id } = project;

              return (
                <Container key={id}>
                  <Col lg={12} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <ProjectCard
                          title={title}
                          img={img}
                          deployedUrl={deployedUrl}
                          url={url}
                          info={info}
                          info2={info2}
                        />
                      </Tilt>
                    </Fade>
                  </Col>
                </Container>
              );
            })}
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
