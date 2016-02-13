import * as React from 'react';

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui';
import { RaisedButton } from 'material-ui';

import searchStore from './store/searchStore';
import SearchForm from './searchForm';

export default class SearchComponent extends React.Component {
  constructor(){
    super();

    this.state = { searchData: { startLocation : '', endLocation : ''} };
  }
  componentDidMount(){
    searchStore.subscribe(() => {

    });
  }

  render(){

    var formIsValid = this.state.searchData.startLocation.length > 0 && this.state.searchData.endLocation.length > 0;
    return (
      <Card style={{ maxWidth : '800px', margin : '10px auto' }}>
        <CardHeader
        title="Wyszukiwanie połączeń"
        subtitle="Dane przewozowe" avatar="/icon.png"></CardHeader>

        <CardText><SearchForm startLocation={this.state.searchData.startLocation} endLocation={this.state.searchData.endLocation} onChange={(searchData) => { this.setState({ searchData }) }} /></CardText>
        <CardActions>
          <RaisedButton label="Szukaj" primary={true} disabled={!formIsValid} onClick={() => { searchStore.dispatch({ type: 'test', action : 'test' }); }} />
        </CardActions>
      </Card>
    );
  }
}
