import * as React from 'react';
import store from './flex/store';

export default class TreeItem extends React.Component{
  level(){
    return (this.props.item.treeCode.match(/-/g) || []).length;
  }
  render(){
    var item = this.props.item;
    var level = this.level();
    var style = { paddingLeft : level  * 16 + 'px'  }
    return (<li onClick={() => {store.dispatch({ type : 'TOGGLE_COLLAPSE', treeCode : item.treeCode })}} style={style} className="list-group-item">{`${item.name} -> ${item.isOpen}`}</li>);
  }
}
