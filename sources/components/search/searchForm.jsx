import * as React from 'react';

import { AutoComplete, DatePicker } from 'material-ui';

export default class SearchFormComponent extends React.Component {
  render(){
    return (
      <div>
        <AutoComplete fullWidth={true} floatingLabelText="Podroz z..." dataSource={[ "Wroclaw", "Kozienice", "Czernica", "Chrzastawa Wielka" ]} />
        <AutoComplete fullWidth={true} floatingLabelText="Podroz do..." dataSource={[ "Berlin", "Londyn" ]} />
        <DatePicker fullWidth={true} floatingLabelText="W dniu..." autoOk={true} />
      </div>
    )
  }
}
