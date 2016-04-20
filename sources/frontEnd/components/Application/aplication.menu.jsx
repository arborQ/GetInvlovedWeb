import * as React from 'react';
import { Link } from 'react-router';
import { Paper, DropDownContainer } from '../shared'
import SearchPage from '../Search/application.search';

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
              <Link to="/userSettings">Ustawienia</Link>
              <Link to="/help">Help</Link>
              <Link to="/logout">Wyloguj</Link>
            </div>
          </Paper>
        </DropDownContainer>
    );
  }
}
