import * as React from 'react';
import { Link } from 'react-router';
import { RouteItem } from 'routing';
import { Paper, InputContainer, ButtonContainer } from 'ui';
import { NavigateTo } from 'routing';
import AuthorizedComponent from '../shared/authorized';

@RouteItem('Szukaj/(:by)')
class applicationSearch extends AuthorizedComponent{
  constructor(){
    super();
    this.state = { search : '' };
  }
  componentWillMount(){
    super.componentWillMount();
    this.setState(Object.assign(this.state, { search : this.props.routeParams.by || '' }))
  }
  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign(this.state, { search : nextProps.routeParams.by || '' }))
  }

  renderAuthorizedContent(){
    return (
      <div>
        <Paper>
          <form onSubmit={(e) => { e.preventDefault(); NavigateTo('/Szukaj/Wynik/:by', { by : this.state.search })  }}>
            <InputContainer placeholder="Szukaj" value={this.state.search} onChange={(e) => this.setState(Object.assign(this.state, { search : e.target.value })) } />
            <ButtonContainer type="submit">search.searchButton</ButtonContainer>
          </form>
        </Paper>
        <div>{this.props.children}</div>
      </div>);
  }
};

export default applicationSearch;
