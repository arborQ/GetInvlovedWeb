import * as React from 'react';

export default class gridRowContainer extends React.Component {
  render(){
    if(!this.props.children){
      return null;
    }
    return (
        <div className="mui-row">
          {this.props.children}
        </div>
    );
  }
}
