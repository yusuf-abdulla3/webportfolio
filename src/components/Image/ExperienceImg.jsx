import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ExperienceImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return (
        <Img
          className="rounded shadow-lg"
          alt={alt}
          fixed={imageFixed}
          style={{
            borderRadius: '20%',
            boxShadow: '10px 10px 10px 10px #0a192f',
            marginBottom: '5em',
          }}
        />
      );
    }}
  />
);

ExperienceImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ExperienceImg;
