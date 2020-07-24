import React, { useEffect } from 'react';
import './App.css';
import Menu from './components/Menu';
import Container from './components/Container';
import { useDispatch } from 'react-redux';
import { check } from './actions/users';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const existingToken = JSON.parse(localStorage.getItem('token'));
		if (existingToken) dispatch(check(existingToken));
	}, [dispatch]);

	return (
		<div className="App">
			<Menu />
			<div className="container">
				<Container />
			</div>
		</div>
	);
}

export default App;
