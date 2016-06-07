import * as React from 'react';
import { Link } from 'react-router';
import { RouteItem } from 'routing';
import { sortBy, filter } from 'lodash';
import { Paper, InputContainer, ButtonContainer } from 'ui';
import { get } from 'api-call';

@RouteItem('Szukaj/Wynik/(:by)')
class applicationSearchResults extends React.Component{
  constructor(){
    super();
    this.state = { results : [], search : '' };
  }

  loadServerData(props){
    Object.assign({}, this.state, { search : props.routeParams.by })
    get('/api/search', { search : props.routeParams.by })
    .then((results) => {
      this.setState(Object.assign({}, this.state, { results }));
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
    return (
      <Paper>
        {userItems}
      </Paper>);
  }
};

export default applicationSearchResults;
