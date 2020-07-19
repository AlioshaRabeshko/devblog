import React from 'react';
import StatementList from './StatementList.js';
import Statement from './Statement.js';
import { Route, Switch } from 'react-router-dom';

class Container extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/statement" component={Statement} />
          <Route path="/" component={StatementList} />
        </Switch>
      </div>
    )
  }
}

export default Container;
