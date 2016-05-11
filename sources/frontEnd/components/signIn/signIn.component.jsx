import * as React from 'react';
import { assign } from 'lodash';
import { Store } from 'flux-logic'
import { RouteItem } from 'routing';
import { ButtonContainer, InputContainer, FormContainer } from 'ui';
import { NavigateTo } from 'routing';

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
    if(this.state.login === 'arbor' && this.state.password === 'arbor'){
      Store.dispatch({ type : 'signIn.success', data : this.state });
      Store.dispatch({ type : 'message.success', data : "Sign in successfull"});
      NavigateTo('/Szukaj');
    }else{
      Store.dispatch({ type : 'message.error', data : "Unknown login or password"});
    }
  }

  render(){
    var isValid = this.formIsValid();
    return (
      <div className="mui-panel">
        <FormContainer onSubmit={this.submitForm.bind(this)}>
          <InputContainer type="text" id="email" placeholder="Email" value={this.state.login} onChange={(e) => { this.setState(assign({}, this.state, { login : e.target.value })) }} />
          <InputContainer type="password" id="password" placeholder="Password" value={this.state.password} onChange={(e) => { this.setState(assign({}, this.state, { password : e.target.value })) }} />
          <ButtonContainer disabled={!this.formIsValid()} type="submit">Sign In</ButtonContainer>
        </FormContainer>
      </div>
    );
  }
}
