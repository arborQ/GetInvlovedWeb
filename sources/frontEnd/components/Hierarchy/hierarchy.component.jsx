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
    this.subscriber = store.subscribe(() => {
      this.setState(store.getState());
      console.log('change state');
    });
  }
  componentWillUnmount(){
    this.subscriber();
  }
  render(){
    var items = [];
    return (<TreeView items={this.state.hierarchy} />);
  }
}
