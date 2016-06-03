import * as React from 'react';
import LocalizableComponent from './localizableComponent';

export default class textContainer  extends LocalizableComponent {
  reslovePropsKey(props){
    return props.children;
  }
  render(){
    return (
      <span {...this.props}>{this.state.translationText}</span>
    );
  }
}
