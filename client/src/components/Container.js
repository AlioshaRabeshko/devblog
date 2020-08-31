import React from 'react';
import PostList from './PostList';
import Post from './Post';
import User from './User';
import Sign from './Sign';
import Edit from './Edit';
import Static from './Static';
import EditStatic from './EditStatic';
import Undefined from './Undefined';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';

const Container = () => (
	<Switch>
		<Route path="/post/:id" component={Post} />
		<Route path="/author/:author/:page?" component={PostList} />
		<Route path="/category/:category/:page?" component={PostList} />
		<Route path="/search/:query/:page?" component={PostList} />
		<PrivateRoute path="/user" component={User} />
		<PrivateRoute path="/edit/:id" component={Edit} />
		<PrivateRoute path="/editstatic/:page" component={EditStatic} />
		<Route path="/sign" component={Sign} />
		<Route path="/undefined" component={Undefined} />
		<Route path="/static/:page" component={Static} />
		<Route path="/:page" component={PostList} />
		<Route path="/" component={PostList} />
	</Switch>
);

export default Container;
