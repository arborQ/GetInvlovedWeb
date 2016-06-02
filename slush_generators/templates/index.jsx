import * as React from 'react';
import { RouteItem } from 'routing';
import { ButtonContainer, FormContainer, Paper } from 'ui';

//<%= componentDescription %>
@RouteItem('<%= componentName %>')
class <%= componentName %>Component extends React.Component{
  constructor(){
    super();
    this.state = {  };
  }
  // componentWillMount (){
  //
  // }
  //
  // componentDidMount(){
  //
  // }
  //
  // componentWillReceiveProps(nextProps){
  //
  // }
  //
  // shouldComponentUpdate(nextProps, nextState){
  //
  // }
  //
  // componentWillUpdate(nextProps, nextState){
  //
  // }
  //
  // componentDidUpdate(prevProps, prevState){
  //
  // }
  //
  // componentWillUnmount(){
  //
  // }

  render(){
    return ( <Paper><%= componentName %></Paper> );
  }
};

export default <%= componentName %>Component;
