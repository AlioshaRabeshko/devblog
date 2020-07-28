import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from './Editor';
import Gallery from './Gallery';
import { EditorContext } from '../context/editor';
import { addPost, getCategories } from '../actions/posts';
import { logOut, getSubs, setSub, setStatus } from '../actions/users';
import { useHistory } from 'react-router-dom';

function User(props) {
	const { user, subs } = useSelector((state) => state.user);
	const { categories } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const history = useHistory();
	const [tab, setTab] = useState({ one: true, two: false, three: false });
	const [title, setTitle] = useState(null);
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState(null);
	const [content, setContent] = useState(null);
	const [category, setCategory] = useState(null);
	const [status_local, setStatus_local] = useState('');
	const [warn, setWarn] = useState('');

	function logOut_local() {
		localStorage.setItem('user', null);
		localStorage.setItem('token', null);
		dispatch(logOut(() => history.push('/sign')));
	}

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getSubs());
	}, [dispatch]);

	useEffect(() => setStatus_local(user.user.status), [user]);

	function submitPost() {
		if (!title) {
			setWarn('No title');
			return;
		}
		if (!description) {
			setWarn('No description');
			return;
		}
		if (!image) {
			setWarn('No image');
			return;
		}
		if (!content) {
			setWarn('No content');
			return;
		}
		dispatch(
			addPost(
				{
					title,
					category,
					description,
					image,
					content,
					author: user.user.shortName,
				},
				history
			)
		);
	}
	return (
		<div className="post single user-console">
			<div className="tabs">
				<input
					type="radio"
					name="tab-btn"
					id="tab-btn-1"
					checked={tab.one}
					onChange={() => setTab({ one: true, two: false, three: false })}
				/>
				<label htmlFor="tab-btn-1">User's page</label>
				<input
					type="radio"
					name="tab-btn"
					id="tab-btn-2"
					checked={tab.two}
					onChange={() => setTab({ one: false, two: true, three: false })}
				/>
				<label htmlFor="tab-btn-2">New post</label>
				<input
					type="radio"
					name="tab-btn"
					id="tab-btn-3"
					checked={tab.three}
					onChange={() => setTab({ one: false, two: false, three: true })}
				/>
				<label htmlFor="tab-btn-3">Gallery</label>

				<div id="content-1">
					<div className="user-page">
						<div className="user-block">
							<p className="user-name">{user.user.name}</p>
							<p
								className="user-status"
								contentEditable
								onInput={(e) => setStatus_local(e.target.textContent)}
								suppressContentEditableWarning={true}>
								{user.user.status}
							</p>
							{user.user.status !== status_local ? (
								<button
									className="sign-button"
									onClick={() => dispatch(setStatus(status_local))}>
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
											onClick={(e) => dispatch(setSub(e.target.id))}
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
												onClick={(e) => dispatch(setSub(e.target.id))}
											/>
											<label htmlFor={el}>{el}</label>
										</div>
									))}
							</div>
						</div>
						<div className="user-block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
							semper urna. Nullam lobortis vestibulum tellus vel vulputate. In
							vehicula, turpis ut sollicitudin facilisis, lectus tellus
							ullamcorper ligula, quis accumsan ligula massa id diam. Vivamus a
							nibh ac orci tristique malesuada ac ac felis. In scelerisque lacus
							ac lorem hendrerit, et bibendum purus hendrerit. Etiam sit amet
							lacus fermentum, tempus justo quis, hendrerit est. Nunc vitae ex a
							risus dictum pretium vel vitae dolor.
						</div>
					</div>

					<button className="sign-button upload-button" onClick={logOut_local}>
						Log Out
					</button>
				</div>
				<div id="content-2">
					<div className="new-post-inputs">
						<input
							type="text"
							placeholder="Post title"
							onChange={(e) => setTitle(e.target.value)}
						/>
						<textarea
							placeholder="Short description will be displayed in Posts list"
							onChange={(e) => setDescription(e.target.value)}></textarea>
						<div className="select">
							<input
								type="text"
								placeholder="Image URL"
								onChange={(e) => setImage(e.target.value)}
							/>
							<label>Category:</label>
							<input
								className="categories"
								type="text"
								name="product"
								list="categories"
								onChange={(e) => setCategory(e.target.value)}
							/>
							<datalist id="categories">
								{categories.map((el, id) => (
									<option key={id} className="select-item">
										{el}
									</option>
								))}
							</datalist>
						</div>
					</div>
					<h2>Post's main content</h2>
					<EditorContext.Provider value={{ content, setContent }}>
						<Editor />
					</EditorContext.Provider>
					<p className="sign-error text-center">{warn}</p>
					<button className="sign-button upload-button" onClick={submitPost}>
						Public
					</button>
				</div>
				<div id="content-3">
					<Gallery />
				</div>
			</div>
		</div>
	);
}

export default User;
