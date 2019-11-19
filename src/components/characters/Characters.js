import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { Character } from './Character';
import styles from './Characters.css';

export const Characters = ({ characters, handleClick }) => {
  const characterEles = characters.map(character => (
    <Grid key={character.id} item xs={6} sm={4}>
      <Character 
        character={character}
        handleClick={handleClick}
      />
    </Grid>
  ));

  return (
    <div className={styles.Characters} >
      <div className={styles.BackgroundImage}>
        <img src="https://live.staticflickr.com/1901/45574031691_c042f9794c_b.jpg" />
      </div>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {characterEles}
        </Grid>
      </Container>    
    </div>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired,
  handleClick: PropTypes.func
};
