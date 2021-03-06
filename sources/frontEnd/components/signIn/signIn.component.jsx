import * as React from 'react';
import { assign } from 'lodash';
import { SignInAction, DisplayMessageAction } from 'flux-actions'
import { RouteItem } from 'routing';
import { ButtonContainer, InputContainer, FormContainer, Paper, TextContainer } from 'ui';
import { NavigateTo } from 'routing';
import { post } from 'api-call';
import AuthorizedComponent from '../shared/authorized';

@RouteItem('Zaloguj')
export default class signInComponent extends AuthorizedComponent{
  constructor(){
    super();
    this.state = { login : '', password : '' };
  }

  formIsValid(){
    return this.state.login.length > 0 && this.state.password.length > 0;
  }

  submitForm(){
    var { login, password } = this.state;

    post('/api/authorize', { login, password })
    .then((res) => {
      if(res.isAuthenticated){
        SignInAction(res.token);
        DisplayMessageAction("messages.signInMessage");
      }else{
        DisplayMessageAction(res.message);
      }
    });
  }
  renderAuthorizedContent(){
    return (<Paper><TextContainer>account.userAuthorizedContentMessage</TextContainer></Paper>);
  }

  renderUnauthorizedContent(){
    var isValid = this.formIsValid();
    return (
      <Paper>
        <FormContainer onSubmit={this.submitForm.bind(this)}>
          <InputContainer type="text" id="email" placeholder="account.email" value={this.state.login} onChange={(e) => { this.setState(assign({}, this.state, { login : e.target.value })) }} />
          <InputContainer type="password" id="password" placeholder="account.password" value={this.state.password} onChange={(e) => { this.setState(assign({}, this.state, { password : e.target.value })) }} />
          <ButtonContainer disabled={!this.formIsValid()} type="submit">{"account.signin"}</ButtonContainer>
        </FormContainer>
      </Paper>
    );
  }
}
