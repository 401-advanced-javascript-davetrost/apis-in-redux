import React from 'react';
import { Character } from './cards/Card';

export default function App() {
  return (
    <>
      <Character character={{ name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' }} handleClick={() => console.log('clicked 1')} />
      <Character character={{ name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' }} handleClick={() => console.log('clicked 2')} />
      <Character character={{ name: 'Aang', image: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235' }} handleClick={() => console.log('clicked 3')} />
    </>
  );
}
