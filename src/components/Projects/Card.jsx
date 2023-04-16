import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ProjectImg from '../Image/ProjectImg';

const ProjectCard = ({ title, info, info2, deployedUrl, url, img }) => {
  return (
    <Card sx={{ maxWidth: 345, maxheight: 700, backgroundColor: '#202020' }}>
      <div data-tilt className="thumbnail rounded">
        <ProjectImg alt={title} filename={img} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          {info}
        </Typography>
        <br />
        <Typography variant="body2" style={{ color: 'red' }}>
          {info2}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={deployedUrl} size="small" style={{ color: 'white' }}>
          See Live
        </Button>
        <Button href={url} size="small" style={{ color: 'white' }}>
          GitHub Repo
        </Button>
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
