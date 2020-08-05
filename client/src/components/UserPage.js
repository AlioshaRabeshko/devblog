import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getPosts, getUnverified } from '../actions/posts';
import { logOut, getSubs, setSub, setStatus } from '../actions/users';
import { useHistory, Link } from 'react-router-dom';

function User() {
	const { user, subs } = useSelector((state) => state.user);
	const { categories, posts, unverified } = useSelector((state) => state.posts);
	const [statusLocal, setStatusLocal] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	function logOut_local() {
		localStorage.setItem('user', null);
		localStorage.setItem('token', null);
		dispatch(logOut(() => history.push('/sign')));
	}

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getSubs(user.user.id));
		dispatch(getPosts(null, user.user.id));
		setStatusLocal(user.user.status);
		if (user.user.verified >= 50) dispatch(getUnverified());
	}, [user, dispatch]);

	return (
		<div className="user-page">
			<div className="user-block status">
				<p className="user-name">{user.user.name}</p>
				<p
					className="user-status"
					contentEditable
					onInput={(e) => setStatusLocal(e.target.textContent)}
					suppressContentEditableWarning={true}>
					{user.user.status}
				</p>
				{user.user.status !== statusLocal ? (
					<button
						className="sign-button"
						onClick={() => dispatch(setStatus(statusLocal, user.user.id))}>
						Save
					</button>
				) : (
					<div />
				)}
				<div className="categories">
					{subs.map((el, id) => (
						<div key={id}>
							<input
								type="checkbox"
								id={el}
								defaultChecked={true}
								onClick={(e) => dispatch(setSub(e.target.id, user.user.email))}
							/>
							<label htmlFor={el}>{el}</label>
						</div>
					))}
					{categories
						.filter((el) => subs.indexOf(el) === -1)
						.map((el, id) => (
							<div key={id}>
								<input
									type="checkbox"
									name={el}
									id={el}
									value="a1"
									onClick={(e) =>
										dispatch(setSub(e.target.id, user.user.email))
									}
								/>
								<label htmlFor={el}>{el}</label>
							</div>
						))}
				</div>
			</div>
			{posts.rows.map((el, id) => (
				<div className="user-block article" key={id}>
					<Link to={`/post/${el.id}`} className={el.verified ? 'green' : 'red'}>
						{el.title}
					</Link>
				</div>
			))}
			<button className="logout" onClick={logOut_local}>
				Log Out
			</button>
			{unverified.map((el, id) => (
				<Link to={`/post/${el.id}`} key={id} className="unverified">
					{el.title}
				</Link>
			))}
		</div>
	);
}

export default User;
