import * as React from 'react';
import { Link } from 'react-router';
import { TextContainer } from 'ui';
import AuthorizedComponent from '../shared/authorized';
import SearchPage from '../Search/application.search';

export default class applicationNavigation extends AuthorizedComponent{

  menuItemClassName(key){
    var pathName = this.props.selected;
    return pathName == key ? 'active' : '';
  }

  renderAuthorizedContent(){
    return (
      <ul className="nav navbar-nav">
        <li className={this.menuItemClassName('/')} key={'home'}><Link to={'/'}><TextContainer>menu.home</TextContainer></Link></li>
        <li className={this.menuItemClassName('/search')} key={'search'}><Link to={'/'}><TextContainer>menu.search</TextContainer></Link></li>
      </ul>
    );
  }

  renderUnauthorizedContent(){
    return (
      <ul className="nav navbar-nav">
        <li className={this.menuItemClassName('/Zaloguj')} key={'signin'}><Link to={'/Zaloguj'}><TextContainer>menu.signIn</TextContainer></Link></li>
      </ul>
      );
  }

  // render(){
  //
  //   var pathName = this.props.selected;
  //
  //
  //   var paths = [
  //     { path : '/', display : 'menu.home' },
  //     { path : SearchPage.PageCode, display : 'menu.search' }
  //   ].map((item, index) => <li className={ pathName == item.path ? 'active' : '' } key={index}><Link to={item.path}><TextContainer>{item.display}</TextContainer></Link></li>);
  //
  //   return (
  //     <ul className="nav navbar-nav">
  //       {paths}
  //     </ul>
  //   );
  // }
}
