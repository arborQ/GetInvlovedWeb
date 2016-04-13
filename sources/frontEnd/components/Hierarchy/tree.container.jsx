import * as React from 'react';

export default class TreeContainer extends React.Component{
  render(){
    return (
      <ul className="list-group">
        <li className="list-group-item disabled">No items</li>
      </ul>
    );
  }
}
