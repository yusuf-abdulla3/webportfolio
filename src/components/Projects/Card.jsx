import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ProjectImg from '../Image/ProjectImg';

const ProjectCard = ({ title, info, info2, deployedUrl, url, img }) => {
  return (
    <Card
      sx={{
        width: '25rem',
        height: '40rem',
        maxWidth: 600,
        maxheight: 800,
        backgroundColor: '#202020',
      }}
    >
      <div data-tilt className="thumbnail rounded">
        <ProjectImg alt={title} filename={img} />
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
};
