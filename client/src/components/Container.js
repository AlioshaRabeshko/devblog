import React from 'react';
import StatementList from './StatementList.js';
import Statement from './Statement.js';
import User from './User.js';
import Sign from './Sign.js';
import PrivateRoute from './PrivateRoute.js';
import { Route, Switch } from 'react-router-dom';

class Container extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/statement" component={Statement} />
				<PrivateRoute path="/user" component={User} />
				<Route path="/sign" component={Sign} />
				<Route path="/" component={StatementList} />
			</Switch>
		);
	}
}

export default Container;
