import * as React from 'react';

class baseComponent extends React.Component{
  constructor(){
    super();
    this.updateState.bind(this);
  }
  updateState(newState){
    this.setState(Object.assign({}, this.state, newState));
  }
};

export default baseComponent;
