import * as React from 'react';
import TreeItem from './tree.item';
export default class TreeContainer extends React.Component{



  render(){
    var hierarchyItems = this.props.items;

    var items =hierarchyItems.map((item) => <TreeItem key={item.treeCode} item={item} />);
    if(items.length === 0){
      items = [<li className="list-group-item disabled">No items</li>];
    }
    return (
      <ul className="list-group">
        {items}
      </ul>
    );
  }
}
