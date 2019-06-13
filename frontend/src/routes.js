import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
  return (
    <Switch> {/*Garante que apenas uma rota será chamada por vez*/}
      <Route path="/" exact component={Feed} /> {/* O exact faz com que essa rota seja chamada quando eu passar exatamente o código da rota */}
      <Route path="/new" component={New} />
    </Switch>
  );
}

export default Routes;