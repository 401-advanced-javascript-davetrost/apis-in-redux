import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Character.css';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '80%',
  },
}));

export const Character = ({ character, handleClick }) => {
  const muiClasses = useStyles();
  const { name, image } = character;

  return (
    <Card onClick={handleClick} className={`${muiClasses.card} ${styles.Character}`}>
      <CardMedia
        className={muiClasses.media}
        image={image}
        title={name}
      />
      <CardHeader
        className={styles.CardHeader}
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
