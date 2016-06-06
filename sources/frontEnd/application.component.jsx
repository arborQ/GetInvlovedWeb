import * as React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { RoutingSettings } from 'routing';
import { Paper } from 'ui';
import UnknownPage from './Components/shared/404'
import Application from './Components/Application/application.component';

import {
  SearchPage,
  SearchResultsPage,
  SignInPage,
} from 'pages';

import AuthorizedComponent from './components/shared/authorized';

export default class ApplicationComponent extends React.Component {
  render(){
    return (
      <Router history={RoutingSettings.HistoryOption}>
        <Route path="/" component={Application} >
          <IndexRoute component={SearchPage} />
          <Route path={SearchPage.PageCode} component={SearchPage}>
            <Route path={SearchResultsPage.PageCode} component={SearchResultsPage}></Route>
          </Route>
          <Route path={SignInPage.PageCode} component={SignInPage}></Route>
          <Route path="*" component={UnknownPage} />
        </Route>
      </Router>
    );
  }
}
