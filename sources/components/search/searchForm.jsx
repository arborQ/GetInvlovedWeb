import * as React from 'react';
import { assign } from 'lodash';
import { AutoComplete, DatePicker, Avatar, TextField } from 'material-ui';

export default class SearchFormComponent extends React.Component {

  onSearchChange(context) {
    const { startLocation, endLocation, onChange } = this.props;
    if(onChange){
      var newContext = assign({ startLocation, endLocation }, context);
      onChange(newContext);
    }
  }


  render(){
    var childStyle = { "marginRight" : "10px" };

    const { startLocation, endLocation, onChange } = this.props;

    return (
      <div className="in-row">
        <TextField onChange={(e) => { this.onSearchChange({ startLocation : e.target.value }) }} defaultValue={startLocation} style={childStyle} fullWidth={true} floatingLabelText="Podroz z..." />
        <TextField onChange={(e) => { this.onSearchChange({ endLocation : e.target.value }) }} defaultValue={endLocation} style={childStyle} fullWidth={true} floatingLabelText="Podroz do..." />
        <DatePicker fullWidth={true} hintText="W dniu..." autoOk={true} fullWidth={true} />
      </div>
    )
  }
}
