import * as React from 'react';

export default class TreeContainer extends React.Component{
  render(){
    var hierarchyItems = this.props.items;

    var items =hierarchyItems.map((item) => <li key={item.treeCode} className="list-group-item">{item.name}</li>);
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
