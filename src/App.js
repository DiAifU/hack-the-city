import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './semantic/dist/semantic.css';

import Main from './pages/Main';
import NotFound from './pages/NotFound';

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
