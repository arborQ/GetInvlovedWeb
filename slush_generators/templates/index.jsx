import * as React from 'react';
import { RouteItem } from 'routing';

//<%= componentDescription %>
@RouteItem('<%= componentName %>')
class <%= componentName %>Component extends React.Component{
  constructor(){
    super();
    this.state = {  };
  }

  render(){
    return ( <div><%= componentName %></div>);
  }
};

export default <%= componentName %>Component;
