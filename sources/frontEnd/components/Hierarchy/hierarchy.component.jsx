import * as React from 'react';
import { routeItem } from '../routing/routes';
import TreeView from './tree.container';

@routeItem('Hierarchy')
export default class HierarchyComponent extends React.Component{
  render(){
    var items = [];
    return (<TreeView items={[ { treeCode : '0-', name : 'root' }, { treeCode : '0-0-', name : 'first child' } ]} />);
  }
}
