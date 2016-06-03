import * as React from 'react';
import { Subscribe, GetState } from './localize/localize.store';

export default class localizableComponent extends React.Component {
  reslovePropsKey(props){
    throw 'override reslovePropsKey function';
  }
  setTranslation(props = this.props) {
    var translationText = GetState().localizedString(this.reslovePropsKey(this.props));
    this.setState(Object.assign({}, this.state, { translationText }));
  }

  componentWillMount(){
    this.setTranslation();
    this.componentWillUnmount = Subscribe(this.setTranslation.bind(this));
  }

  componentWillReceiveProps(next){
    this.setTranslation(next);
  }

}
