
import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import history from './services/history';

import Routes from './routes';

const App: React.FC = () => (
  <Router history={history}>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
