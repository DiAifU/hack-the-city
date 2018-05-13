import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './semantic/dist/semantic.css';

import Main from './pages/Main';
import CustomContainer from './components/CustomContainer';

import NotFound from './pages/NotFound';

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/tgjm" component={CustomContainer} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
