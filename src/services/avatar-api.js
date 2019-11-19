export const fetchAvatars = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=20')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      ...character,
      photoUrl: character.photoUrl || 'https://avatarfiles.alphacoders.com/185/thumb-185782.jpg'
    })));
};
