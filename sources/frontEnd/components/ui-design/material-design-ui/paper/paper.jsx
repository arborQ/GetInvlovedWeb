import * as React from 'react';

export default class paperContainer extends React.Component {
  constructor(){
    super();
  }
  render(){
    if(!this.props.children){
      return null;
    }
    return (
        <div className="mui-panel" {...this.props}>
          {this.props.children}
        </div>
    );
  }
}
