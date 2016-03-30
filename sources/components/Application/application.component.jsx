import * as React from 'react';
import { Link } from 'react-router';

import TopNavigation from './application.navigation';

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
        <nav>
          <div className="by">
            <TopNavigation selected={this.props.location.pathname} />
          </div>
        </nav>
        <div className="row by">
          <div className="col col-md-3">
            <div className="card">
              <div className="card-img-top f" style={imageStyle}></div>
              <div className="card-block">some random name</div>
            </div>
          </div>
          <div className="col col-md-9">
            <div className="card">
              <div className="card-block">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default applicationComponent;
