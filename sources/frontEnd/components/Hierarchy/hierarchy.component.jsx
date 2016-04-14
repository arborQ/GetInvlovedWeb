import * as React from 'react';
import { routeItem } from '../routing/routes';
import TreeView from './tree.container';
import store from './flex/store';
import { loadHierarchyData } from './flex/dataService';

@routeItem('Hierarchy')
export default class HierarchyComponent extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
  }

  componentWillMount(){
    this.componentWillUnmount = store.subscribe(() => {
      this.setState(store.getState());
    });

    loadHierarchyData();
  }

  render(){
    var items = [];
    if(this.state.isFetching > 0){
      return (<div>loading ...</div>);
    }else{
      return (<TreeView items={this.state.hierarchy} />);
      
    }
  }
}
