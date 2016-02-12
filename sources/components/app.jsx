import * as React from 'react';
import { Link } from 'react-router';
import { LeftNav, MenuItem, AppBar } from 'material-ui';

export default class Application extends React.Component{
  constructor(){
    super();
    this.state = { menuOpen : true };
  }

  render(){
    return (
      <div>
        <LeftNav open={this.state.menuOpen}>
          <div>
            <Link to="/search">
              <MenuItem>Szukaj</MenuItem>
            </Link>
          </div>
        </LeftNav>
        <div style={{ paddingLeft : this.state.menuOpen ? "254px" : "0" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
