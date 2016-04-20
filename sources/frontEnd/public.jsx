import * as React from 'react';
import * as dom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


import Application from './Components/Application/application.component';
import SearchPage from './Components/Search/application.search';
import SignIn from './Components/signIn/signIn.component';
dom.render(
    <Router history={browserHistory}>
    <Route path="/" component={Application} >
      <Route path={SearchPage.PageCode} component={SearchPage}></Route>
      <Route path={SignIn.PageCode} component={SignIn}></Route>
    </Route>
  </Router>
  ,
  document.getElementById('app')
);
