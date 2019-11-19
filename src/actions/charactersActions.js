import { fetchAvatars } from '../services/avatar-api';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';
export const fetchCharacters = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS_LOADING
  });

  fetchAvatars()
    .then(characters => {
      const simpleChars = characters.map(({ _id, name, photoUrl }) => ({
        id: _id,
        name,
        image: photoUrl
      }));
      
      dispatch({
        type: FETCH_CHARACTERS,
        payload: simpleChars
      });
      dispatch({
        type: FETCH_CHARACTERS_DONE
      });
    });
};
