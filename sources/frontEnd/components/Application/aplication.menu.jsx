import * as React from 'react';
import { Link } from 'react-router';
import { Paper, DropDownContainer } from 'ui';
import SearchPage from '../Search/application.search';
import SignIn from '../signIn/signIn.component';
import { Subscribe, GetState, SignOutAction, DisplayMessageAction } from 'flux-actions';
import { assign } from 'lodash';
import md5 from 'md5';

export default class applicationMenu extends React.Component{
  constructor(){
    super();
    this.state = { userData : null };
  }

  componentWillMount(){
    this.componentWillUnmount = Subscribe(() => {
      this.setState(assign({}, this.state, { userData : GetState().account }));
    });
    this.setState(assign({}, this.state, { userData : GetState().account }));
  }

  render(){
    var imageStyle = this.state.userData.isAuthenticated ? {
      backgroundImage : `url(http://www.gravatar.com/avatar/${md5(this.state.userData.email)})`
    } : {};

    var menuOptions = this.state.userData.isAuthenticated
    ? [<a key="signOut" style={{ cursor : 'pointer' }} onClick={ () => { SignOutAction(); DisplayMessageAction("Sign out successfull"); } }>Wyloguj</a>]
    : [<Link  key="signIn" to={SignIn.PageCode}>Zaloguj</Link>];

    return (
        <DropDownContainer triggerItem={<div className="account-settings" style={imageStyle}></div>}>
          <Paper>
            <div className="vertical-menu" style={{width : '200px'}}>
              {menuOptions}
            </div>
          </Paper>
        </DropDownContainer>
    );
  }
}
