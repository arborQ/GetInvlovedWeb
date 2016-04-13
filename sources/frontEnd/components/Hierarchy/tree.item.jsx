import * as React from 'react';
import store from './flex/store';
import { toggleCollapse } from './flex/actions';

export default class TreeItem extends React.Component{
  level(){
    return (this.props.item.treeCode.match(/-/g) || []).length;
  }
  render(){
    var item = this.props.item;
    var level = this.level();
    var style = { paddingLeft : level  * 16 + 'px'  }

    return (
      <li style={style} className="list-group-item" onClick={() => {store.dispatch(toggleCollapse(item.treeCode))}}>
        <i className={`fa fa-angle-${item.isOpen ? 'up' : 'down'}`}></i>
        {`${item.name} -> ${item.isOpen}`}
      </li>);
  }
}
