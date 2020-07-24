import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Container from './components/Container';
import { AuthContext } from './context/auth.js';

function App() {
	const existingTokens = JSON.parse(localStorage.getItem('token'));
	const [user, setUser] = useState(existingTokens ? existingTokens.user : null);
	const [authTokens, setAuthTokens] = useState(existingTokens);
	const setTokens = (data) => {
		localStorage.setItem('token', JSON.stringify(data));
		if (data) {
			setUser(data.user);
			setAuthTokens(data.token);
		} else {
			setUser(null);
			setAuthTokens(null);
		}
	};
	return (
		<div className="App">
			<AuthContext.Provider
				value={{ authTokens, setAuthTokens: setTokens, user }}>
				<Menu />
				<div className="container">
					<Container />
				</div>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
