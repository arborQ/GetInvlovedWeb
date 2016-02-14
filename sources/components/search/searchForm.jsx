import * as React from 'react';
import { assign } from 'lodash';
import { AutoComplete, DatePicker, Avatar, TextField } from 'material-ui';

export default class SearchFormComponent extends React.Component {

  constructor(){
    super();


  }

  onSearchChange(context) {
    const { startLocation, endLocation, onChange } = this.props;
    if(onChange){
      var newContext = assign({ startLocation, endLocation }, context);
      onChange(newContext);
    }
  }


  render(){
    var childStyle = { "marginRight" : "10px" };

    const { searchData, searchStore } = this.props;

    return (
      <div>
        <div className="in-row">
          <TextField
            onChange={(e) => { searchStore.dispatch({ type : 'startLocation', text : e.target.value }); }}
            defaultValue={searchData.startLocation}
            style={childStyle}
            fullWidth={true}
            floatingLabelText="Podroz z..." />
          <TextField
            onChange={(e) => { searchStore.dispatch({ type : 'endLocation', text : e.target.value }); }}
            defaultValue={searchData.endLocation}
            style={childStyle}
            fullWidth={true}
            floatingLabelText="Podroz do..." />
          <DatePicker fullWidth={true} hintText="W dniu..." autoOk={true} fullWidth={true} />
        </div>
      </div>
    )
  }
}
