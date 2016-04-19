import * as React from 'react';
import { Link } from 'react-router';
import { Paper, DropDownContainer } from '../shared'
import SearchPage from '../Search/application.search';
import Hierarchy from '../Hierarchy/hierarchy.component'

export default class applicationMenu extends React.Component{
  constructor(){
    super();
    this.state = { isMenuOpen : false };
  }
  render(){
    return (
      <div>
        <div className="account-settings" onClick={() => { this.setState(Object.assign({}, this.state, { isMenuOpen : true })); }}>
          <DropDownContainer isOpen={this.state.isMenuOpen}>
            <Paper>
              <div>tesfdfdsft</div>
            </Paper>
          </DropDownContainer>
        </div>
      </div>
    );
  }
}
