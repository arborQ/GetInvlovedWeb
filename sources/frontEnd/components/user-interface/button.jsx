import * as React from 'react';
import { ButtonContainer } from 'ui-design';
import LocalizableComponent from './localizableComponent';

export default class buttonContainer extends LocalizableComponent {
  reslovePropsKey(props){
    return props.children;
  }

  render(){
    return ( <ButtonContainer {...this.props}>{this.state.translationText}</ButtonContainer> );
  }
}
