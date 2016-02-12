import * as React from 'react';

import { AutoComplete, DatePicker } from 'material-ui';

export default class SearchFormComponent extends React.Component {
  render(){
    return (
      <div>
        <AutoComplete floatingLabelText="Podroz z..." dataSource={[ "Wroclaw", "Kozienice", "Czernica", "Chrzastawa Wielka" ]} />
        <AutoComplete floatingLabelText="Podroz do..." dataSource={[ "Berlin", "Londyn" ]} />
        <DatePicker hintText="W dniu..." autoOk={true} />
      </div>
    )
  }
}
