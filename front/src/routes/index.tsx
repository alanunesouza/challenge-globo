import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Votacao from '../pages/Votacao';

import { Header } from '../pages/Home/styles';

const Routes: React.FC = () => (
  <Switch>
    <>
      <Header> BIG BROTHER BRASIL </Header>
      <Route path="/" exact component={Home} />
      <Route path="/votacao" exact component={Votacao} />
    </>
  </Switch>
);

export default Routes;
