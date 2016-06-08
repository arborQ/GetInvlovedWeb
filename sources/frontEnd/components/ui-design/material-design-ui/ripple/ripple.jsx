import * as React from 'react';

export default class rippleContainer extends React.Component {
  render(){
    let containerStyle = { position : 'relative' };
    return (
        <div style={containerStyle}>
          {this.props.children}
        </div>);
  }
}
