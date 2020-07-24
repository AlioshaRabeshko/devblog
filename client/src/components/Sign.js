import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth';

function Login() {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [status, setStatus] = useState(0);
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const { authTokens, setAuthTokens } = useAuth();

	function postLogin() {
		if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setError('Wrong email');
			return;
		}
		if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password)) {
			setError('Wrong password');
			return;
		}
		// axios.post("https://www.somePlace.com/auth/login", {
		//   userName,
		//   password
		// }).then(result => {
		//   if (result.status === 200) {
		setAuthTokens({ token: 'some token string', user: 'aliosharabeshko' });
		setLoggedIn(true);
		//   } else {
		//     setIsError(true);
		//   }
		// }).catch(e => {
		//   setIsError(true);
		// });
	}

	if (authTokens) {
		return <Redirect to="/user" />;
	}

	if (status === 0)
		return (
			<div className="sign">
				<div className="sign-title">
					<div>
						<p>Sing In</p>
					</div>
				</div>
				<input
					className="sign-input"
					placeholder="Email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="sign-input"
					placeholder="Password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className="sign-links">
					<p className="clickable-p" onClick={() => setStatus(1)}>
						Don't have an account?
					</p>
					<p className="clickable-p" onClick={() => setStatus(2)}>
						Forget password?
					</p>
				</div>
				<button className="sign-button" onClick={postLogin}>
					Sign In
				</button>
				<p className="sign-error">{error}</p>
			</div>
		);
	if (status === 1)
		return (
			<div className="sign">
				<div className="sign-title">
					<div>
						<p>Sing Up</p>
					</div>
				</div>
				<input
					className="sign-input"
					placeholder="Email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="sign-input"
					placeholder="Password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<input
					className="sign-input"
					placeholder="Repeat password"
					type="password"
					onChange={(e) => setRePassword(e.target.value)}
				/>
				<input
					className="sign-input"
					placeholder="Name"
					type="password"
					onChange={(e) => setName(e.target.value)}
				/>
				<div className="sign-links">
					<p className="clickable-p" onClick={() => setStatus(0)}>
						Already have account?
					</p>
				</div>
				<button className="sign-button">Sign Up</button>
				<p className="sign-error">{error}</p>
			</div>
		);
	return (
		<div className="sign">
			<div className="sign-title restore">
				<div>
					<p>Restore password</p>
				</div>
			</div>
			<input
				className="sign-input"
				placeholder="Email"
				type="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<div className="sign-links">
				<p className="clickable-p" onClick={() => setStatus(0)}>
					Remembered Your password?
				</p>
			</div>
			<button className="sign-button">Send password</button>
			<p className="sign-error">{error}</p>
		</div>
	);
}

export default Login;
