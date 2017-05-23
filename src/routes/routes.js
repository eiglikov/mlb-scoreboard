import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MainContainer from '../containers/MainContainer';
import DetailContainer from '../containers/DetailContainer';
import GameDateContainer from '../containers/GameDateContainer';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={GameDateContainer} />
      <Route path="/detail" component={DetailContainer} />
    </Route>
  </Router>
);
