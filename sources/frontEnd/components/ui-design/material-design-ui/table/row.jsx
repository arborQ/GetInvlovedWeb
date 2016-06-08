import * as React from 'react';
import RippleEffect from '../ripple/ripple';

export default class tableRowContainer extends React.Component {
  render(){
    let { columns, row } = this.props;

    var columnElements = columns.map((c) => <div key={c.headerName} className={`md-tab-h-c mui-col-md-${c.size}`}>{row[c.headerName]}</div>)
    return (
        <RippleEffect><div className="md-tab-r mui-row">{columnElements}</div></RippleEffect>
    );
  }
}
