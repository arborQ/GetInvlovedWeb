import * as React from 'react';
import { Link } from 'react-router';
import { routeItem } from '../routing/routes';
import { Paper, InputContainer, ButtonContainer } from 'ui';

@routeItem('Szukaj')
class applicationSearch extends React.Component{
  render(){
    return (
      <div>
        <Paper>
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <InputContainer placeholder="Szukaj" />
            <ButtonContainer type="submit">Szukaj</ButtonContainer>
          </form>
        </Paper>
        <div>{this.props.children}</div>
      </div>);
  }
};

export default applicationSearch;
