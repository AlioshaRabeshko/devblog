import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, to, ...rest }) {
	const { token } = useSelector((state) => state.user.user);
	return (
		<Route
			{...rest}
			render={(props) =>
				token ? <Component {...props} /> : <Redirect to="/sign" />
			}
		/>
	);
}

export default PrivateRoute;
