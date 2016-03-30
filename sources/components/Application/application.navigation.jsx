import * as React from 'react';
import { Link } from 'react-router';

import SearchPage from '../Search/application.search';

export default class applicationNavigation extends React.Component{
  render(){
    
    var pathName = this.props.selected;

    
    var paths = [
      { path : '/', display : 'Home' },
      { path : SearchPage.PageCode, display : 'Szukaj' }
    ].map((item, index) => <li className={ pathName == item.path ? 'active' : '' } key={index}><Link to={item.path}>{item.display}</Link></li>);
    
    return (
      <ul className="nav navbar-nav">
        {paths}
      </ul>
    );
  }
}