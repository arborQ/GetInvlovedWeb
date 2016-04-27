import * as React from 'react';

export default class buttonContainer extends React.Component {
  render(){
    return (
      <button className="mui-btn mui-btn--primary" {...this.props}>{this.props.children}</button>
    );
  }
}
