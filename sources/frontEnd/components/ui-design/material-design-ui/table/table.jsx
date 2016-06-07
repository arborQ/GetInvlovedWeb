import * as React from 'react';
import Paper from '../paper/paper';
import Header from './header';
import Row from './row';
import { sumBy } from 'lodash';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

export default class tableContainer extends React.Component {

  componentWillMount(){
    let columnMaxSize = 12;
    var columnSum = sumBy(this.props.columns, c => c.size);
    if(columnSum > columnMaxSize){
      throw `Sum column size can't be grater than ${columnMaxSize} units. Now equals ${columnSum} units.`;
    }
  }
  render(){

    let { rows, columns } = this.props;
    let displayRows = rows.map((r) => <Row key={r.id} row={r} columns={columns} />);

    return (
      <div className="md-tab">
        <Paper style={{ paddingTop : 0, paddingBottom : 0 }}>
          <Header columns={columns} />
          <ReactCSSTransitionGroup >
            { displayRows }
          </ReactCSSTransitionGroup>
        </Paper>
      </div>
    );
  }
}
