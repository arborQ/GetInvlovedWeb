import * as React from 'react';
import { assign } from 'lodash';
import { routeItem } from '../routing/routes';

import { store } from '../involvedStore'

@routeItem('Zaloguj')
export default class signInComponent extends React.Component{
  constructor(){
    super();
    this.state = { login : '', password : '' };
  }

  formIsValid(){
    return this.state.login.length > 0 && this.state.password.length > 0;
  }

  submitForm(e){
    e.preventDefault();
    e.stopPropagation();
    store.dispatch({ type : 'signIn.success', data : this.state });
    store.dispatch({ type : 'message.success', data : "Sign in successfull"});
  }

  render(){
    var isValid = this.formIsValid();
    return (
      <div>
        <div className="col col-lg-6">
          <form onSubmit={this.submitForm.bind(this)}>
            <fieldset className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" placeholder="Email" value={this.state.login} onChange={(e) => { this.setState(assign({}, this.state, { login : e.target.value })) }} />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={(e) => { this.setState(assign({}, this.state, { password : e.target.value })) }} />
            </fieldset>
            <button type="submit" className="btn btn-primary" disabled={!isValid}>Sign In</button>
          </form>
        </div>
        <div className="col col-lg-6">
        or
        </div>
      </div>
    );
  }
}
