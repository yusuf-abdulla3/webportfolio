import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ProjectImg from '../Image/ProjectImg';
import CardModal from './CardModal';

const ProjectCard = ({ title, info, info2, deployedUrl, url, img, vid }) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CardModal showModal={showModal} setShowModal={setShowModal} vid={vid} />
      <Card
        sx={{
          width: '25rem',
          height: '40rem',
          maxWidth: 600,
          maxheight: 800,
          backgroundColor: '#202020',
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div data-tilt className="thumbnail rounded" style={{ display: vid && show ? 'none' : '' }}>
          <ProjectImg id="project_img" alt={title} filename={img} />
        </div>
        <div
          data-tilt
          className="thumbnail rounded"
          style={{
            display: !vid || !show ? 'none' : '',
            width: show ? '' : '',
            height: show ? '' : '',
            cursor: vid && show ? 'pointer' : '',
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
            }}
            onClick={() => setShowModal(true)}
            title="Click Here to Expand Video"
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: 'white', fontSize: '1.8rem' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ color: 'white', fontSize: '1.2rem' }}
          >
            {info}
          </Typography>
          <br />
          <Typography className="new-text-color" variant="body1" style={{ fontSize: '1rem' }}>
            {info2}
          </Typography>
        </CardContent>
        <CardActions className="justify-content-center">
          {deployedUrl ? (
            <a
              href={deployedUrl}
              target="_blank"
              className="project_card__button1"
              role="button"
              rel="noreferrer"
            >
              See Live
            </a>
          ) : (
            <a
              href={deployedUrl}
              target="_blank"
              className="project_card__button1__disabled"
              role="button"
              rel="noreferrer"
            >
              See Live
            </a>
          )}
          <a
            href={url}
            target="_blank"
            className="project_card__button1"
            role="button"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  info2: PropTypes.string,
  img: PropTypes.string,
  deployedUrl: PropTypes.string,
  url: PropTypes.string,
  vid: PropTypes.string,
};
