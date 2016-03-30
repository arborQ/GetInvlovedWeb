import * as React from 'react';
import { Link } from 'react-router';

import SearchPage from '../Search/application.search';


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
            <ul className="nav navbar-nav">
              <li><Link to={SearchPage.PageCode}>Szukaj</Link></li>
              <li><Link to="/Historia">Historia</Link></li>
              <li><Link to="/Ustawienia">Ustawienia</Link></li>
            </ul>
          </div>
        </nav>
        <div className="row by">
          <div className="col col-md-3">
            <div className="card">
              <div className="card-img-top f" style={imageStyle}></div>
              <div className="card-block">d dasd as</div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className="card">
              <div className="card-block">{this.props.children}</div>
            </div>
          </div>
          <div className="col col-md-3"></div>
        </div>
      </div>);
  }
}

export default applicationComponent;
