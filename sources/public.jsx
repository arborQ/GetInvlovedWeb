
import * as React from 'react';
import * as dom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory } from 'react-router';

import Application from './components/app';

import SearchPage from './components/search/searchPage'

injectTapEventPlugin();
dom.render(
    <Router history={browserHistory}>
    <Route path="/" component={Application} >
      <Route path="search" component={SearchPage}></Route>
    </Route>
  </Router>
  ,
  document.getElementById('app')
);
