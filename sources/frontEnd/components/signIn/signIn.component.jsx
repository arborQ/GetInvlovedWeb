import * as React from 'react';
import { assign } from 'lodash';
import { SignInAction, DisplayMessageAction } from 'flux-actions'
import { RouteItem } from 'routing';
import { ButtonContainer, InputContainer, FormContainer, Paper } from 'ui';
import { NavigateTo } from 'routing';
import { post } from 'api-call';

@RouteItem('Zaloguj')
export default class signInComponent extends React.Component{
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
        DisplayMessageAction("Sign in successfull");
      }else{
        DisplayMessageAction(res.message);
      }
    });
  }

  render(){
    var isValid = this.formIsValid();
    return (
      <Paper>
        <FormContainer onSubmit={this.submitForm.bind(this)}>
          <InputContainer type="text" id="email" placeholder="Email" value={this.state.login} onChange={(e) => { this.setState(assign({}, this.state, { login : e.target.value })) }} />
          <InputContainer type="password" id="password" placeholder="Password" value={this.state.password} onChange={(e) => { this.setState(assign({}, this.state, { password : e.target.value })) }} />
          <ButtonContainer disabled={!this.formIsValid()} type="submit">Sign In</ButtonContainer>
        </FormContainer>
      </Paper>
    );
  }
}
