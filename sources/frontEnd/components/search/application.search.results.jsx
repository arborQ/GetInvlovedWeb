import * as React from 'react';
import { Link } from 'react-router';
import { RouteItem } from 'routing';
import { sortBy, filter } from 'lodash';
import { Paper, InputContainer, ButtonContainer, LoadingIndicator } from 'ui';
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
    let { results } = this.state;
    var userItems =
    results
    .map((item) => <div key={item.id} className="list-item">{`${item.firstName} ${item.lastName}`}</div>);

    if(userItems.length === 0){
      userItems = [ <i key={0}>{`No items for '${this.props.routeParams.by}'`}</i>];
    }
    if(this.state.isLoading){
      return (<Paper><LoadingIndicator /></Paper>);
    }else{
      return ( <Paper> {userItems} </Paper> );
    }
  }
};

export default applicationSearchResults;
