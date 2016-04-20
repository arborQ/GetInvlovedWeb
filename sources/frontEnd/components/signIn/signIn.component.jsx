import * as React from 'react';
import { routeItem } from '../routing/routes';

@routeItem('Zaloguj')
export default class signInComponent extends React.Component{
  render(){
    return (
      <div>
        <div className="col col-lg-6">
          <form>
            <fieldset className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" placeholder="Email" />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </fieldset>
          </form>
        </div>
        <div className="col col-lg-6">
        or
        </div>
      </div>
    );
  }
}
