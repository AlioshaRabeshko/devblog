import React from 'react';
import StatementList from './StatementList';
import Statement from './Statement';
import User from './User';
import Sign from './Sign';
import Undefined from './Undefined';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';

class Container extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/statement/:id" component={Statement} />
				<Route path="/author/:author/:page?" component={StatementList} />
				<Route path="/category/:category/:page?" component={StatementList} />
				<Route path="/search/:query/:page?" component={StatementList} />
				<PrivateRoute path="/user" component={User} />
				<Route path="/sign" component={Sign} />
				<Route path="/undefined" component={Undefined} />
				<Route path="/:page" component={StatementList} />
				<Route path="/" component={StatementList} />
			</Switch>
		);
	}
}

export default Container;
