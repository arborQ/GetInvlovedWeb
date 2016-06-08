import * as React from 'react';
import { Link } from 'react-router';
import { Paper, DropDownContainer, TextContainer } from 'ui';
import SearchPage from '../Search/application.search';
import AuthorizedComponent from '../shared/authorized';
import SignIn from '../signIn/signIn.component';
import { Subscribe, GetState, SignOutAction, Auth0SignInAction, DisplayMessageAction } from 'flux-actions';
import { assign } from 'lodash';
import md5 from 'md5';

export default class applicationMenu extends AuthorizedComponent{

  auto0SignIn(){
    var lock = new Auth0Lock('SxuuH0NwiIhUauJQJenOUMDyBysR4Wb9', 'justmove.eu.auth0.com');
    console.log(lock.app_metadata);
    lock.showSignin((err, profile, token) => {
      console.log(profile);
      Auth0SignInAction(token, profile);
    })
  }
  renderAuthorizedContent() {
    var imageStyle = { backgroundImage : `url(http://www.gravatar.com/avatar/${md5(this.state.account.email)})` };

    return (<DropDownContainer triggerItem={<div className="account-settings" style={imageStyle}></div>}>
      <Paper>
        <div className="vertical-menu" style={{width : '200px'}}>
          <a key="signOut" style={{ cursor : 'pointer' }} onClick={ () => { SignOutAction(); DisplayMessageAction("messages.signOutMessage"); } }>
            <TextContainer>account.signOut</TextContainer>
          </a>
        </div>
      </Paper>
    </DropDownContainer>);
  }

  renderUnauthorizedContent() {
    //<a key="Auth0Lock" onClick={this.auto0SignIn.bind(this)}><TextContainer>account.Auth0Lock</TextContainer></a>
    return (<DropDownContainer triggerItem={<div className="account-settings"></div>}>
      <Paper>
        <div className="vertical-menu" style={{width : '200px'}}>
          <Link  key="signIn" to={SignIn.PageCode}><TextContainer>account.signIn</TextContainer></Link>
        </div>
      </Paper>
    </DropDownContainer>);
  }
}
