import * as React from 'react';
import { Link } from 'react-router';

import TopNavigation from './application.navigation';
import LanguageSelection from './application.language';
import AccountSettings from './aplication.menu';

import { Snackbar } from 'ui';
class applicationComponent extends React.Component{
  render(){

    var imageStyle = {
      'height': '145px',
      'backgroundSize': 'cover',
      'backgroundPosition': '50% 50%',
      'backgroundImage' : 'url(images/avatars/elliot.jpg)'
    }
    return (
      <div>
        <header>
          <div>
            <TopNavigation key="TopNavigation" selected={this.props.location.pathname} />
            <AccountSettings key="AccountSettings" />
          </div>
        </header>
        <section className="main-content">{this.props.children}</section>
        <footer><Snackbar /></footer>
      </div>
    );
  }
}

export default applicationComponent;
