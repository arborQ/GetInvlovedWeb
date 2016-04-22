import * as React from 'react';
import { Link } from 'react-router';
import { Paper, DropDownContainer } from '../shared'
import SearchPage from '../Search/application.search';
import SignIn from '../signIn/signIn.component';
import { store } from '../involvedStore';
import { assign } from 'lodash';

export default class applicationMenu extends React.Component{
  constructor(){
    super();
    this.state = { userData : null };
  }

  componentWillMount(){
    this.componentWillUnmount = store.subscribe(() => {
      this.setState(assign({}, this.state, { userData : store.getState().account }));
    });
    this.setState(assign({}, this.state, { userData : store.getState().account }));
  }

  render(){
    var menuOptions = this.state.userData.isAuthenticated
    ? [<Link key="signOut" to={SignIn.PageCode}>Wyloguj</Link>]
    : [<Link  key="signIn" to={SignIn.PageCode}>Zaloguj</Link>];

    return (
        <DropDownContainer triggerItem={<div className="account-settings"></div>}>
          <Paper>
            <div className="vertical-menu" style={{width : '200px'}}>
              {menuOptions}
            </div>
          </Paper>
        </DropDownContainer>
    );
  }
}
