import * as React from 'react';

export default class TreeItem extends React.Component{
  level(){
    return (this.props.item.treeCode.match(/-/g) || []).length;
  }
  render(){
    var item = this.props.item;
    var level = this.level();
    var style = { paddingLeft : level  * 16 + 'px'  }
    return (<li style={style} className="list-group-item">{item.name}</li>);
  }
}
