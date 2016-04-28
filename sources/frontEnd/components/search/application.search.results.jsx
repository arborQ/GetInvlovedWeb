import * as React from 'react';
import { Link } from 'react-router';
import { routeItem } from '../routing/routes';
import { Paper, InputContainer, ButtonContainer } from 'ui';

@routeItem('Wynik/:by')
class applicationSearchResults extends React.Component{
  render(){
    return (
      <Paper>
        Results
      </Paper>);
  }
};

export default applicationSearchResults;
