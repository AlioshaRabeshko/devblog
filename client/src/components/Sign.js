import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signUp, logIn } from '../actions/users';

function Login() {
	const auth = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	const [error, setError] = useState('');
	const [email, setEmail] = useState('Leflylll@gmail.com');
	const [name, setName] = useState('Aliosha Rabeshko');
	const [status, setStatus] = useState(0);
	const [password, setPassword] = useState('22dbfE2k');
	const [rePassword, setRePassword] = useState('22dbfE2k');

	function logIn_local() {
		if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setError('Wrong email');
			return;
		}
		if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password)) {
			setError('Wrong password');
			return;
		}
		dispatch(logIn({ email, password }));
	}

	function sign() {
		if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setError('Wrong email');
			return;
		}
		if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password)) {
			setError('Wrong password');
			return;
		}
		if (password !== rePassword) {
			setError("Passwords don't match");
			return;
		}
		dispatch(
			signUp({
				email,
				password,
				name,
				shortName: name.replace(' ', '').toLowerCase(),
			})
		);
	}

	if (auth.token) {
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
				<button className="sign-button" onClick={logIn_local}>
					Sign In
				</button>
				<p className="sign-error">{error}</p>
			</div>
		);
	if (status === 1)
		return (
			<div className="sign">
				{console.log(auth)}
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
					type="text"
					onChange={(e) => setName(e.target.value)}
				/>
				<div className="sign-links">
					<p className="clickable-p" onClick={() => setStatus(0)}>
						Already have account?
					</p>
				</div>
				<button className="sign-button" onClick={sign}>
					Sign Up
				</button>
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
