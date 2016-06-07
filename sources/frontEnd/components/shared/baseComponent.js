import * as React from 'react';

class baseComponent extends React.Component{
  constructor(){
    super();
    this.updateState.bind(this);

    this.promisHistory = [];
  }
  updateState(newState){
    this.setState(Object.assign({}, this.state, newState));
  }

  handlePromise(promise){
    let isCancelled = false;
    return new Promise((resolve, reject) => {
      promise.then((data) => {
        if(!isCancelled){
          resolve(data);
        }
      });

      promise.catch((data) => {
        if(!isCancelled){
          reject(data);
        }
      });
    });

    this.promisHistory = [...this.promisHistory, () => { isCancelled = true } ]
  }

  componentWillUnmount() {
    for(var i = 0 ; i < this.promisHistory.length ; i++){
      this.promisHistory[i]();
    }
  }
};

export default baseComponent;
