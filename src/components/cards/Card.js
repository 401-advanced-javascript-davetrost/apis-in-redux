import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardHeader, CardActions, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classes from './Card.css';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export const Character = ({ character, handleClick }) => {
  const muiClasses = useStyles();
  const { name, image } = character;

  return (
    <Card onClick={handleClick} className={`${muiClasses.card} ${classes.Card}`}>
      <CardHeader
        title={name}
      />
      <CardMedia
        className={muiClasses.media}
        image={image}
        title={name}
      />
    </Card>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
};
