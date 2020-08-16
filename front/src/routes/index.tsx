import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Votacao from '../pages/Votacao';
import Resultado from '../pages/Resultado';

import { Header } from '../pages/Home/styles';

const Routes: React.FC = () => (
    <>
      <Header> BIG BROTHER BRASIL </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/votacao" exact component={Votacao} />
        <Route path="/resultado" exact component={Resultado} />
      </Switch>
    </>
);

export default Routes;
