import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Nav } from './Nav';
import { CharactersContainer } from '../containers/CharactersContainer';

export const ROUTER_LOCATIONS = {
  0: '/avatar',
  1: '/simpsons',
  '/avatar': 0,
  '/simpsons': 1,
};

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Nav />
      <Switch>
        <Route path={ROUTER_LOCATIONS[0]}>
          <CharactersContainer />
        </Route>
        <Route path={ROUTER_LOCATIONS[1]}>
          <h2>simpsons</h2>
        </Route>
        <Route path="/">
          <CharactersContainer />
        </Route>
      </Switch>
    </Router>
  );
}
