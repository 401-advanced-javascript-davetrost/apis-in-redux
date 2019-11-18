import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'normalize.css';
import { Provider } from 'react-redux';
import store from './store';
import './styles/fonts.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
