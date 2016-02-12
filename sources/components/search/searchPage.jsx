import * as React from 'react';

import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui';
import { RaisedButton } from 'material-ui';

import SearchForm from './searchForm';

export default class SearchComponent extends React.Component {
  render(){
    return (
      <Card style={{ maxWidth : '800px', margin : '0 auto' }}>
        <CardHeader
        title="Wyszukiwanie połączeń"
        subtitle="Dane przewozowe" avatar="/static/icon.png"></CardHeader>

        <CardText><SearchForm /></CardText>
        <CardActions>
          <RaisedButton label="Szukaj" primary={true} />
        </CardActions>
      </Card>
    );
  }
}
