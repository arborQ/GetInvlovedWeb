import * as React from 'react';
import { Subscribe, GetState } from '../localize/localize.store';

export default class inputContainer extends React.Component {
  constructor(){
    super();
    this.state = { translationText : '' };
  }

  setTranslation(props = this.props){
    var translationText = GetState().localizedString(this.props.placeholder);
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
    var props = Object.assign({}, this.props, { placeholder : this.state.translationText });
    return (
      <div className="mui-textfield">
        <input {...props} />
      </div>
    );
  }
}
