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
      if(setup.messages.length > 0){
        setTimeout(() => {
          store.dispatch({ type : 'message.discard', ids : this.state.messages.map((i) => i.$id)});
        }, this.props.timeout || 2000);
      }
    });
  }

  render(){
    var [ message ] = this.state.messages;
    if(!!message){
      return (
        <div className="snackbar">{message.message} {this.state.messages.length}</div>
      );
    } else {
      return null;
    }
  }
}
