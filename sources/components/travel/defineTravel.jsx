import * as React from 'react';
import { Card, CardText, CardActions, CardHeader, RaisedButton } from 'material-ui';

import { LocationResolver } from '../ui'

export default class defineTravel extends React.Component{
  render(){
    return (
      <Card style={{ maxWidth : '800px', margin : '10px auto' }}>
        <CardHeader
        title="Dodaj nowe połączenie"
        subtitle="Dane przewozowe" avatar="/new-pointer.png"></CardHeader>

        <CardText><LocationResolver searchText="test from props" /></CardText>
        <CardActions>
          <RaisedButton label="Dodaj" primary={true} />
        </CardActions>
      </Card>
    );
  }
}
