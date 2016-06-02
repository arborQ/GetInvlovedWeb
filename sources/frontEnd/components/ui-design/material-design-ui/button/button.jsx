import * as React from 'react';
import { Subscribe, GetState } from '../localize/localize.store';

export default class buttonContainer extends React.Component {
  constructor(){
    super();
    this.state = { translationText : '' };
  }

  setTranslation(props = this.props){
    var translationText = GetState().localizedString(this.props.children);
    this.setState(Object.assign({}, this.state, { translationText }));
  }

  componentWillMount(){
    this.setTranslation();
    this.componentWillUnmount = Subscribe(this.setTranslation.bind(this));
  }

  componentWillReceiveProps(next){
    this.setTranslation(next);
  }

  render(){
    return (
      <button className="mui-btn mui-btn--primary" {...this.props}>{this.state.translationText}</button>
    );
  }
}
