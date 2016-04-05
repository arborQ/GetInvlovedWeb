import * as React from 'react';
import { Link } from 'react-router';

import SearchPage from '../Search/application.search';

export default class applicationLanguage extends React.Component{
  render(){
    
    var pathName = this.props.selected;

    
    var paths = [
      { path : '/', display : 'Home' },
      { path : SearchPage.PageCode, display : 'Szukaj' }
    ].map((item, index) => <li className={ pathName == item.path ? 'active' : '' } key={index}><Link to={item.path}>{item.display}</Link></li>);
    
    return (
      <div className="dropdown pull-right open">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    );
  }
}