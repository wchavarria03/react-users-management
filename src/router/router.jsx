import React from 'react';
import App from '@/components/App/App.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/user" component={App} />
      <Route exact path="/user/:id" component={App} />
    </Switch>
  </BrowserRouter>
);
