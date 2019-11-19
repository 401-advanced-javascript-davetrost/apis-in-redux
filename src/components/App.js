import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Nav } from './Nav';
import { CharactersContainer } from '../containers/CharactersContainer';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Nav />
      <Switch>
        <Route path="/avatar">
          <CharactersContainer />
        </Route>
        <Route path="/simpsons">
          <h2>simpsons</h2>
        </Route>
        <Route path="/">
          <CharactersContainer />
        </Route>
      </Switch>
    </Router>
  );
}
