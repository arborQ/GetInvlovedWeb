import * as React from 'react';
import BaseComponent from './baseComponent';
import { Paper, TextContainer } from 'ui';
import { Subscribe, GetState } from 'flux-actions';

class authorizedComponent extends BaseComponent {

  refreshState(){
    var { account } = GetState();
    this.updateState({ account });
  }

  componentWillMount(){
    this.refreshState();
    this.componentWillUnmount = Subscribe(this.refreshState.bind(this));
  }

  renderAuthorizedContent(){
    return null;
  }

  renderUnauthorizedContent(){
    return (
      <Paper>
        <TextContainer>account.unauthorizedContentMessage</TextContainer>
      </Paper>);
  }

  isAccessPermited(account){
    return account.isAuthenticated;
  }

  render(){
    if(this.isAccessPermited(this.state.account)){
      return this.renderAuthorizedContent();
    }else{
      return this.renderUnauthorizedContent();
    }
  }
};

export default authorizedComponent;
