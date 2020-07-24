import React from 'react';
import StatementList from './StatementList.js';
import Statement from './Statement.js';
import User from './User.js';
import Sign from './Sign.js';
import Undefined from './Undefined.js';
import PrivateRoute from './PrivateRoute.js';
import { Route, Switch } from 'react-router-dom';

class Container extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/statement/:id" component={Statement} />
				<Route path="/author/:author" component={StatementList} />
				<Route path="/category/:category" component={StatementList} />
				<Route path="/search/:query" component={StatementList} />
				<PrivateRoute path="/user" component={User} />
				<Route path="/sign" component={Sign} />
				<Route path="/undefined" component={Undefined} />
				<Route path="/" component={StatementList} />
			</Switch>
		);
	}
}

export default Container;
