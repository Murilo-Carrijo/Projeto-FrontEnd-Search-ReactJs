import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Search from '../pages/Search';
import Favorites from '../pages/Favorites';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path="/search" component={Search} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  );
}

export default Routes;
