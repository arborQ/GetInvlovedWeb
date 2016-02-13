import * as React from 'react';
import { Link } from 'react-router';
import { LeftNav, MenuItem, AppBar } from 'material-ui';

export default class Application extends React.Component{
  constructor(){
    super();
    this.state = { menuOpen : true };
  }

  render(){
    var panelWidth = 180;
    return (
      <div>
        <LeftNav open={this.state.menuOpen} docked={true} width={panelWidth}>
          <div>
            <Link to="/search">
              <MenuItem>Szukaj</MenuItem>
            </Link>
          </div>
        </LeftNav>
        <div style={{ paddingLeft : this.state.menuOpen ? panelWidth + "px" : "0" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
