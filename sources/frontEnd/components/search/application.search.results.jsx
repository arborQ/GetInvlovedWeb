import * as React from 'react';
import { Link } from 'react-router';
import { RouteItem } from 'routing';
import { sortBy, filter } from 'lodash';
import { Paper, InputContainer, ButtonContainer, LoadingIndicator, TableContainer } from 'ui';
import { get } from 'api-call';
import BaseComponent from '../shared/baseComponent';

@RouteItem('Szukaj/Wynik/(:by)')
class applicationSearchResults extends BaseComponent{
  constructor(){
    super();
    this.state = { results : [], search : '', isLoading : false };
  }

  loadServerData(props){
    super.updateState({ search : props.routeParams.by, isLoading : true });
    this.handlePromise(get('/api/search', { search : props.routeParams.by }))
    .then((results) => {
      super.updateState({ results, isLoading : false });
    });
  }

  componentWillReceiveProps(next){
    this.loadServerData(next);
  }

  componentWillMount(){
    this.loadServerData(this.props);
  }

  render(){
    return (<TableContainer
      columns={[ 
        { headerName : 'id', size : 1 },
        { headerName : 'firstName', size : 3 },
        { headerName : 'lastName', size : 8 } ]}
      rows={this.state.results} />);

  }
};

export default applicationSearchResults;
