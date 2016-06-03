import * as React from 'react';
import { InputContainer } from 'ui-design';
import LocalizableComponent from './localizableComponent';

export default class inputContainer extends LocalizableComponent {
  reslovePropsKey(props){
    return props.placeholder;
  }

  render(){
    var props = Object.assign({}, this.props, { placeholder : this.state.translationText });
    return ( <InputContainer {...props} /> );
  }
}
