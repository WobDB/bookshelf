import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js';
import App from './App.jsx';
import './styles/app.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);