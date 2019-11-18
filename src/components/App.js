import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Characters } from './cards/Characters';

export default function App() {
  const charsEx = [
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
    { name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' },
  ];
  const handleClick = () => console.log('clicked!');

  return (
    <>
      <CssBaseline />
      <Characters characters={charsEx} handleClick={handleClick} />
    </>
  );
}
