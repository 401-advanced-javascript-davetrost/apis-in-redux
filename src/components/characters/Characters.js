import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { Character } from './Character';

export const Characters = ({ characters, handleClick }) => {
  const characterEles = characters.map((character, i) => (
    <Grid key={i} item xs={6} sm={4}>
      <Character 
        character={character}
        handleClick={handleClick}
      />
    </Grid>
  ));

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {characterEles}
      </Grid>
    </Container>    
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired,
  handleClick: PropTypes.func.isRequired
};
