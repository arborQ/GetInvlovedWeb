import * as React from 'react';
import { assign } from 'lodash';
import { Subscribe, GetState, DiscardMessageActions } from 'flux-actions';
import { Snackbar } from 'ui-design';
import * as LocalizableStore from './localize/localize.store';

export default class messageContainer extends React.Component {
  constructor(){
    super();
    this.state = { messages : [] };
  }

  clearTimeout(){
    if(!!this.timeout){
      clearTimeout(this.timeout);
    }
  }
  componentWillMount(){
    this.componentWillUnmount = Subscribe(() => {
      let { commounications } = GetState();
      this.setState(assign({}, this.state, { messages : commounications.messages }));
      if(commounications.messages.length > 0){
        this.clearTimeout();
        this.timeout = setTimeout(() => {
          DiscardMessageActions(this.state.messages.map((i) => i.$id));
        }, this.props.timeout || 2000 + this.state.messages.length * 300);
      }
    });
  }

  render(){
    var { messages } = this.state;
    if(messages.length > 0){
      var translated  = messages.map(m =>LocalizableStore.GetState().localizedString(m.message)) ;

      return (
        <Snackbar messages={translated} />
      );
    } else {
      return null;
    }
  }
}
