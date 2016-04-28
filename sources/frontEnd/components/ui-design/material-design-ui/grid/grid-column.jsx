import * as React from 'react';

export default class gridColumnContainer extends React.Component {
  render(){
    return (
        <div className={`mui-col-md-${this.props.size}`}>
          {this.props.children}
        </div>
    );
  }
}
