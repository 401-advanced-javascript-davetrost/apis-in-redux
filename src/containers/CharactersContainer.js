import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components/Loading';
import { Characters } from '../components/characters/Characters';
import { getCharacters, getCharactersLoading } from '../selectors/charactersSelectors';
import { fetchCharactersPromise } from '../actions/charactersActions';

export const CharactersContainer = () => {

  const charactersList = useSelector(state => getCharacters(state));
  const loading = useSelector(state => getCharactersLoading(state));
  
  const dispatch = useDispatch();
  const updateCharacters = () => dispatch(fetchCharactersPromise());

  const handleClick = () => console.log('clicked!');

  useEffect(() => {
    updateCharacters();
  }, []);

  if(loading) return <Loading />;

  return (
    <Characters characters={charactersList} handleClick={handleClick} />
  );
};
