import * as React from 'react';

export default class loadingIndicator extends React.Component{
  constructor(){
    super();
    this.state = { hide : true };
  }

  componentWillMount(){
    if(!!this.props.timeout){
      this.loadingTimeOut = setTimeout(() => {
        this.setState({ hide : false })
      }, this.props.timeout);
    }else{
      this.setState({ hide : false })
    }
  }

  componentWillUnmount(){
    if(!!this.loadingTimeOut){
      clearTimeout(this.loadingTimeOut);
      this.setState({ hide : true })
    }
  }

  render(){
    if(this.state.hide){
      return null;
    }
    let loadingStyles = Object.assign({}, { size : "100px", margin : "0 auto" }, this.props.style);
    return (
      <div className="loading-indicator" style={{ width : loadingStyles.size, height : loadingStyles.size, margin : loadingStyles.margin }}></div>
    );
  }
}
