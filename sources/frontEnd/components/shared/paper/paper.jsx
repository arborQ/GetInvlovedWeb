import * as React from 'react';

export default class paperContainer extends React.Component {
  render(){
    if(!this.props.children){
      return null;
    }
    return (
        <div className="paper-1">
          {this.props.children}
        </div>
    );
  }
}
