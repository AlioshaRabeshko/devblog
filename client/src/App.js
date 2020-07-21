import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Container from './components/Container';
import { AuthContext } from './context/auth.js';

function App() {
	const existingTokens = JSON.parse(localStorage.getItem('tokens'));
	const [authTokens, setAuthTokens] = useState(existingTokens);

	const setTokens = (data) => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};
	return (
		<div className="App">
			<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
				<Menu />
				<div className="container">
					<Container />
				</div>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
