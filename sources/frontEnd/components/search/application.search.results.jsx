import * as React from 'react';
import { Link } from 'react-router';
import { RouteItem } from 'routing';
import { Paper, InputContainer, ButtonContainer } from 'ui';

@RouteItem('Wynik/:by')
class applicationSearchResults extends React.Component{
  render(){
    return (
      <Paper>
        Results
      </Paper>);
  }
};

export default applicationSearchResults;
