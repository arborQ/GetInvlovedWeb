import * as React from 'react';
import { Link } from 'react-router';
import { RouteItem } from 'routing';
import { sortBy, filter } from 'lodash';
import { Paper, InputContainer, ButtonContainer } from 'ui';

@RouteItem('Szukaj/Wynik/(:by)')
class applicationSearchResults extends React.Component{
  render(){
    var users = [
      { id : 1, firstName : 'Łukasz', lastName : 'Wojcik'},
      { id : 2, firstName : 'Aleksandra', lastName : 'Wojcik'},
      { id : 3, firstName : 'Julia', lastName : 'Wojcik'},
      { id : 4, firstName : 'Julia', lastName : 'Wojcik'}
    ];
    var userItems =
    sortBy(filter(users, { firstName : this.props.routeParams.by }), 'firstName')
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
