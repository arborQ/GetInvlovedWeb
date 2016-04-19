import * as React from 'react';

var loadingStyles = {
  width : "100px",
  height : "100px",
  margin : "0 auto"
};

export default class loadingIndicator extends React.Component{
  render(){
    return (
      <div className="loading-indicator" style={loadingStyles}></div>
    );
  }
}
