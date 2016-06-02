import * as React from 'react';
import { Subscribe, GetState } from 'flux-actions';

export default class overlayContainer extends React.Component {
  componentWillMount(){
    this.componentWillUnmount = Subscribe(() => {
      var previousCount = this.state.dialogItems.length;
      let { dialog } = GetState();

      this.setState(assign({}, this.state, { dialogItems : commounications.dialogItems }));
      var currentCount = this.state.dialogItems.length;
      if(currentCount > previousCount && previousCount === 0){
        console.log('show overlay');
      }else if(currentCount === 0 && previousCount > 0){
        console.log('hide overlay');
      }
    });
  }

  render(){
    var [ topDialog ] = this.state.dialogItems;
    if(!topDialog){
      return null;
    }
    return (
      <div id="mui-overlay" onClick={() => { alert('yy'); }}>
      </div>
    );
  }
}
