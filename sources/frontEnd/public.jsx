import * as React from 'react';
import * as dom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


import Application from './Components/Application/application.component';
import SearchPage from './Components/Search/application.search';
import Hierarchy from './Components/Hierarchy/hierarchy.component'

dom.render(
    <Router history={browserHistory}>
    <Route path="/" component={Application} >
      <Route path={SearchPage.PageCode} component={SearchPage}></Route>
      <Route path={Hierarchy.PageCode} component={Hierarchy}></Route>
    </Route>
  </Router>
  ,
  document.getElementById('app')
);
