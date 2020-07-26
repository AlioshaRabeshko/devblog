import React from 'react';
import { useSelector } from 'react-redux';

function PrivateComponent(component, perm, ...rest) {
	const { user } = useSelector((state) => state.user.user);
	return (
		<Route
			{...rest}
			render={(props) => (token ? <Component {...props} /> : <div></div>)}
		/>
	);
}

export default PrivateComponent;
