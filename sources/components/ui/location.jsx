import * as React from 'react';

export default class LocationResolver extends React.Component{
  constructor(){
    super();
    this.state = { searchText : 'def' };
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.searchText)
    if(nextProps.searchText){
      this.setState({ searchText : nextProps.searchText });
    }
  }
  render(){
    var { searchText } = this.state;
    return (<input type="text" value={searchText} />);
  }
}
