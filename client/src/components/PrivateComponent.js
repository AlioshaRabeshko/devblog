import React from 'react';
import { useSelector } from 'react-redux';

function PrivateComponent({ perm, ...rest }) {
	const { user } = useSelector((state) => state.user.user);
	return user && user.verified >= perm ? <div {...rest}></div> : <div />;
}

export default PrivateComponent;
