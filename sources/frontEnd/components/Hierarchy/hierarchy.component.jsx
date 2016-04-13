import * as React from 'react';
import { routeItem } from '../routing/routes';
import TreeView from './tree.container';

@routeItem('Hierarchy')
export default class HierarchyComponent extends React.Component{
  render(){
    return (<TreeView />);
  }
}
