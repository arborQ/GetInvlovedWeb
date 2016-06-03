import * as React from 'react';

export default class inputContainer extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="mui-textfield">
        <input {...this.props} />
      </div>
    );
  }
}
