import * as React from 'react';
import { List, ListItem } from 'material-ui';
import { assign } from 'lodash';

import { loadCities } from '../logic/googleApi';

export default class LocationList extends React.Component{
  constructor(){
    super();
    this.state = { locations : [], input : '' };
  }
  componentWillReceiveProps (nextProps){
    this.setState(assign(this.state, { input : nextProps.search }));
    if(nextProps.search && nextProps.search.length > 1){
      loadCities(nextProps.search).then((locations) => {
        this.setState(assign(this.state, { locations }));
      });
    }
  }
  render(){
    var { input, locations } = this.state;
    var { onSelect } = this.props;

    if(!locations || locations.length == 0){
      return (<List><ListItem disabled={true} secondaryText={`Brak wynikow dla '${input}'`} /></List>);
    }else{
      var locationListItems = locations.map((item) => <ListItem onMouseEnter={() => { console.log('douch'); onSelect(item); }} key={item.id} primaryText={item.description} />);
      return (<List>{locationListItems}</List>);
    }
  }
}
