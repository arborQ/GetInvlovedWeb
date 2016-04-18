import * as React from 'react';
import { Link } from 'react-router';

import TopNavigation from './application.navigation';
import LanguageSelection from './application.language';

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
            <TopNavigation selected={this.props.location.pathname} />
          </div>
        </header>
        <section className="main-content">{this.props.children}</section>
        <footer>...</footer>
      </div>
    );
    //
    // return (
    //   <div className="row">
    //     <div className="col col-lg-12">
    //       <nav>
    //         <div className="by">
    //           <TopNavigation selected={this.props.location.pathname} />
    //         </div>
    //       </nav>
    //       <div className="row by">
    //         <div className="col col-md-8 col-md-offset-2">
    //           <div className="card">
    //             <div className="card-block">{this.props.children}</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>);
  }
}

export default applicationComponent;
