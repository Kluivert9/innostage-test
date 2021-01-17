import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../../conteiners/pages/MainPage';
import DetailPage from '../../conteiners/pages/DetailPage';
import AbilityPage from '../../conteiners/pages/AbilityPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/pokemon/:id" component={DetailPage} />
      <Route path="/ability/:id" component={AbilityPage} />
      <Redirect to="/" />
    </Switch>
  );
}
