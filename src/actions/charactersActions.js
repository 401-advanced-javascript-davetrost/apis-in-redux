import { fetchAvatars } from '../services/avatar-api';
import { createAction } from 'promise-middleware-redux';

const getAvatarData = () => fetchAvatars()
  .then(characters => {
    return characters.map(({ _id, name, photoUrl }) => ({
      id: _id,
      name,
      image: photoUrl
    }));
  });

export const [
  fetchCharactersPromise,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_DONE,
] = createAction('FETCH_CHARACTERS', getAvatarData);
