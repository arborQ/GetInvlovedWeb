import * as React from 'react';
import { TextField, Paper  } from 'material-ui';
import { assign } from 'lodash';

import LocationList from './locations';

export default class LocationResolver extends React.Component{
  constructor(){
    super();
    this.state = { searchText : 'Kozienice', showPredictions : false };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.searchText){
      this.setState(assign({}, this.state, { searchText : nextProps.searchText }));
    }
  }

  togglePredictions(show){
    this.setState(assign({}, this.state, { showPredictions : show }));
  }

  render(){
    var { searchText, showPredictions } = this.state;
    var { onChange } = this.props;
    return (
      <div>
        <TextField
        defaultValue={searchText}
        floatingLabelText={this.props.label || "Lokalizacja"}
        onChange={(e) => { this.setState({ searchText : e.target.value }); }}
        onFocus={() => { this.togglePredictions(true) }}
        onBlur={() => { this.togglePredictions(false) }}
         />
        <Paper style={{ position : 'absolute', zIndex : 99, display : (showPredictions ? 'block' : 'none') }}>
          <LocationList search={searchText} onSelect={(item) => { onChange(item.description); } } />
        </Paper>
      </div>
    );
  }
}
