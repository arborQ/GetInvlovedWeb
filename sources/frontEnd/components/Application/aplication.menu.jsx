import * as React from 'react';
import { Link } from 'react-router';
import { Paper, DropDownContainer } from '../shared'
import SearchPage from '../Search/application.search';
import SignIn from '../signIn/signIn.component';

export default class applicationMenu extends React.Component{
  constructor(){
    super();
    this.state = { isMenuOpen : false };
  }
  render(){
    return (
        <DropDownContainer triggerItem={<div className="account-settings"></div>}>
          <Paper>
            <div className="vertical-menu" style={{width : '200px'}}>
              <Link to={SignIn.PageCode}>Zaloguj</Link>
            </div>
          </Paper>
        </DropDownContainer>
    );
  }
}
