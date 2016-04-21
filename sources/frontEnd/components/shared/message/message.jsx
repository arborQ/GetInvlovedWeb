import * as React from 'react';
import { assign } from 'lodash';

import { store } from '../../involvedStore';
export default class messageContainer extends React.Component {
  constructor(){
    super();
    this.state = { messages : [] };
  }
  componentWillMount(){
    this.componentWillUnmount = store.subscribe(() => {
      let { setup } = store.getState();
      this.setState(assign({}, this.state, { messages : [...setup.messages] }));
      setTimeout(() => {
        this.setState(assign({}, this.state, { messages : []}));
      }, 2000);
    });
  }

  render(){
    var [ message ] = this.state.messages;
    if(!!message){
      return (
        <div className="snackbar">{message} {this.state.messages.length}</div>
      );
    } else {
      return null;
    }
  }
}
