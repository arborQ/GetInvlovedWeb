import * as React from 'react';
import { Link } from 'react-router';
import { RouteItem } from 'routing';
import { Paper, InputContainer, ButtonContainer } from 'ui';
import { NavigateTo } from 'routing';
import AuthorizedComponent from '../shared/authorized';
import SearchResultsPage from './application.search.results';

@RouteItem('Szukaj/(:by)')
class applicationSearch extends AuthorizedComponent{
  constructor(){
    super();
    this.state = { search : '' };
  }
  componentWillMount(){
    super.componentWillMount();
    this.componentWillReceiveProps(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign(this.state, { search : nextProps.routeParams.by || '', searchQuery  : nextProps.routeParams.by || '' }))
  }

  renderAuthorizedContent(){
    return (
      <div>
        <Paper>
          <form onSubmit={(e) => { e.preventDefault(); NavigateTo('/Szukaj/:by', { by : this.state.search })  }}>
            <InputContainer placeholder="Szukaj" value={this.state.search} onChange={(e) => this.setState(Object.assign(this.state, { search : e.target.value })) } />
            <ButtonContainer type="submit">search.searchButton</ButtonContainer>
          </form>
        </Paper>
        <SearchResultsPage search={this.state.searchQuery} />
      </div>);
  }
};

export default applicationSearch;
