import * as React from 'react';
import { Link } from 'react-router';
import { TextContainer } from 'ui';
import SearchPage from '../Search/application.search';

export default class applicationNavigation extends React.Component{
  render(){

    var pathName = this.props.selected;


    var paths = [
      { path : '/', display : 'menu.home' },
      { path : SearchPage.PageCode, display : 'menu.search' }
    ].map((item, index) => <li className={ pathName == item.path ? 'active' : '' } key={index}><Link to={item.path}><TextContainer>{item.display}</TextContainer></Link></li>);

    return (
      <ul className="nav navbar-nav">
        {paths}
      </ul>
    );
  }
}
