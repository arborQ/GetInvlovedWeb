import * as React from 'react';
import { Link } from 'react-router';
import { routeItem } from '../routing/routes';

@routeItem('Szukaj')
class applicationSearch extends React.Component{
  render(){
    return (
      <div className="card-block">
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button">From</button>
          </span>
          <input type="text" className="form-control" placeholder="search localization" aria-describedby="basic-addon1" />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button">To</button>
          </span>
        </div>
      </div>);
  }
};

export default applicationSearch;
