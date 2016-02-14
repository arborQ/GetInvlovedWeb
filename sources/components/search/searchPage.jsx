import * as React from 'react';
import { createStore } from 'redux';
import { assign } from 'lodash';

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui';
import { RaisedButton } from 'material-ui';

import searchStore from './store/searchStore';
import SearchForm from './searchForm';

export default class SearchComponent extends React.Component {
  constructor(){
    super();

    // this.state = { searchData: { startLocation : '', endLocation : ''} };

    this.searchStore = createStore((context = { searchData : {startLocation: '', endLocation : ''}}, action) => {
      switch (action.type) {
        case "startLocation":
          return assign(context, { searchData : assign(context.searchData, { startLocation : action.text }) })
        case "endLocation":
          return assign(context, { searchData : assign(context.searchData, { endLocation : action.text }) })
        default:
          return context;
      }
    });

    this.state = this.searchStore.getState();
  }
  componentDidMount(){
    this.searchStore.subscribe(() => {
      this.setState(this.searchStore.getState());
    });
  }

  render(){
    const { searchData } = this.state;
    const { startLocation, endLocation } = searchData;

    var formIsValid = startLocation.length > 0 && endLocation.length > 0;
    return (
      <Card style={{ maxWidth : '800px', margin : '10px auto' }}>
        <CardHeader
        title="Wyszukiwanie połączeń"
        subtitle="Dane przewozowe" avatar="/icon.png"></CardHeader>

        <CardText><SearchForm searchData={searchData} searchStore={this.searchStore} /></CardText>
        <CardActions>
          <RaisedButton label="Szukaj" primary={true} disabled={!formIsValid} onClick={() => { searchStore.dispatch({ type: 'test', action : 'test' }); }} />
        </CardActions>
      </Card>
    );
  }
}
