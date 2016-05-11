import * as React from 'react';
import { Link } from 'react-router';
import { Paper, DropDownContainer } from 'ui';
import SearchPage from '../Search/application.search';
import SignIn from '../signIn/signIn.component';
import { Store } from 'flux-logic';
import { assign } from 'lodash';

export default class applicationMenu extends React.Component{
  constructor(){
    super();
    this.state = { userData : null };
  }

  componentWillMount(){
    this.componentWillUnmount = Store.subscribe(() => {
      this.setState(assign({}, this.state, { userData : Store.getState().account }));
    });
    this.setState(assign({}, this.state, { userData : Store.getState().account }));
  }

  render(){
    var menuOptions = this.state.userData.isAuthenticated
    ? [<a key="signOut" style={{ cursor : 'pointer' }} onClick={ () => { Store.dispatch({ type : 'signOut'}); Store.dispatch({ type : 'message.success', data : "Sign out successfull"}); } }>Wyloguj</a>]
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
