import * as React from 'react';

export default class textContainer extends React.Component {
  render(){
    return (
      <div className="mui-textfield">
        <input {...this.props} />
      </div>
    );
  }
}
