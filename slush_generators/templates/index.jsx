import * as React from 'react';
import { RouteItem } from 'routing';

//<%= componentDescription %>
@RouteItem('<%= name %>')
class <%= name %>Component extends React.Component{
  constructor(){
    super();
    this.state = {  };
  }

  render(){
    return ( <div> {{ '<%= name %>' }} </div>);
  }
};

export default <%= name %>Component;
