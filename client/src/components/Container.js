import React from 'react';
import PostList from './PostList';
import Post from './Post';
import User from './User';
import Sign from './Sign';
import Edit from './Edit';
import Undefined from './Undefined';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';

class Container extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/post/:id" component={Post} />
				<Route path="/author/:author/:page?" component={PostList} />
				<Route path="/category/:category/:page?" component={PostList} />
				<Route path="/search/:query/:page?" component={PostList} />
				<PrivateRoute path="/user" component={User} />
				<PrivateRoute path="/edit/:id" component={Edit} />
				<Route path="/sign" component={Sign} />
				<Route path="/undefined" component={Undefined} />
				<Route path="/:page" component={PostList} />
				<Route path="/" component={PostList} />
			</Switch>
		);
	}
}

export default Container;
