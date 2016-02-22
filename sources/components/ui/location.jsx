import * as React from 'react';
import { TextField, Paper, AutoComplete } from 'material-ui';
import { assign } from 'lodash';

import { loadCities } from '../logic/googleApi';
import LocationList from './locations';

export default class LocationResolver extends React.Component{
  constructor(){
    super();
    this.state = { locations : [], open : false, searchText : '' };
  }
  componentWillReceiveProps(nextProps){

  }

  loadLocations(searchText){
    this.setState(assign({}, this.state, { searchText }));
    if(searchText.length > 1){
      loadCities(searchText).then((locations) => {
        this.setState(assign({}, this.state, { locations, open : true }));
      });
    }
  }

  render(){
    var { locations, open, searchText } = this.state;
    var { label } = this.props;
    return (
      <div>
        <AutoComplete
        filter={AutoComplete.noFilter}
        dataSource={locations.map((c) => c.description)}
        open={open && locations.length > 0}
        searchText={searchText}
        triggerUpdateOnFocus={true}
        floatingLabelText={label || "Lokalizacja"}
        onUpdateInput={(value) => { this.loadLocations(value); }} />
      </div>
    );
  }
}
