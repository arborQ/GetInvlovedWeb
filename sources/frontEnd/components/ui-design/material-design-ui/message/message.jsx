import * as React from 'react';

export default class messageContainer extends React.Component {
  render(){
    var { messages } = this.props;
    var [ topMessage ] = messages;
    if(!!topMessage){
      return (
        <div className="snackbar">{ topMessage }</div>
      );
    } else {
      return null;
    }
  }
}
