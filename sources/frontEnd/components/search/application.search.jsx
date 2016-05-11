import * as React from 'react';
import { Link } from 'react-router';
import { RouteItem } from 'routing';
import { Paper, InputContainer, ButtonContainer } from 'ui';
import { NavigateTo } from 'routing';

@RouteItem('Szukaj')
class applicationSearch extends React.Component{
  render(){
    return (
      <div>
        <Paper>
          <form onSubmit={(e) => { e.preventDefault(); NavigateTo('/Szukaj/Wynik/:by', { by : 'test' })  }}>
            <InputContainer placeholder="Szukaj" />
            <ButtonContainer type="submit">Szukaj</ButtonContainer>
          </form>
        </Paper>
        <div>{this.props.children}</div>
      </div>);
  }
};

export default applicationSearch;
