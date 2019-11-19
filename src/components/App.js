import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Header } from './Header';
import { Nav } from './Nav';
import { CharactersContainer } from '../containers/CharactersContainer';

export default function App() {
  return (
    <main>
      <CssBaseline />
      <Header />
      <Nav />
      <CharactersContainer />
    </main>
  );
}
