import {
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_DONE,
  FETCH_CHARACTERS
} from '../actions/charactersActions';
const initialState = {
  charactersList: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_DONE:
      return { ...state, loading: false };
    case FETCH_CHARACTERS:
      return { ...state, charactersList: action.payload };
    default:
      return state;
  }
}
