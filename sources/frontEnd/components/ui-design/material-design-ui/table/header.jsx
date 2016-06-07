import * as React from 'react';
export default class tableHeaderContainer extends React.Component {
  render(){
    let { columns } = this.props;

    var columnElements = columns.map((c) => <div key={c.headerName} className={`md-tab-h-c mui-col-md-${c.size}`}>{c.headerName}</div>)
    return (
        <div className="md-tab-h md-tab-r mui-row">{columnElements}</div>
    );
  }
}
