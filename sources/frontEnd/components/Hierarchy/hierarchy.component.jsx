import * as React from 'react';
import { routeItem } from '../routing/routes';
import TreeView from './tree.container';
import store from './flex/store';

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
  }

  render(){
    var items = [];
    return (<TreeView items={this.state.hierarchy} />);
  }
}
