import * as React from 'react';
import { Card, CardText, CardActions, CardHeader, RaisedButton } from 'material-ui';
import { assign } from 'lodash';

import { LocationResolver } from '../ui'

export default class defineTravel extends React.Component{

  constructor(){
    super();
    this.state = { locationFrom : { description : '' } };
  }

  render(){

    var { locationFrom } = this.state;

    return (
      <Card style={{ maxWidth : '800px', margin : '10px auto' }}>
        <CardHeader
        title="Dodaj nowe połączenie"
        subtitle="Dane przewozowe" avatar="/new-pointer.png"></CardHeader>

        <CardText>
          <LocationResolver
          label="Punkt startowy"
          searchText={locationFrom.description}
          onChange={(description) => { this.setState({}, this.state, { locationFrom : { description } }) }} />
        </CardText>
        <CardActions>
          <RaisedButton label="Dodaj" primary={true} />
        </CardActions>
      </Card>
    );
  }
}
