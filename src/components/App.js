import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Header } from './Header';
import { Nav } from './Nav';
import { CharactersContainer } from '../containers/CharactersContainer';
import styles from './App.css';

export default function App() {
  return (
    <main className={styles.Main}>
      <CssBaseline />
      <Header />
      <Nav />
      <CharactersContainer />
    </main>
  );
}
