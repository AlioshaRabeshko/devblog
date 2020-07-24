import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from './Editor';
import Gallery from './Gallery';
import { useAuth } from '../context/auth';
import { EditorContext } from '../context/editor';
import { addStatement, getCategories } from '../actions/statements';

function User(props) {
	const statements = useSelector((state) => state.statements);
	const dispatch = useDispatch();
	const [tab, setTab] = useState({ one: true, two: false, three: false });
	const [title, setTitle] = useState(null);
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState(null);
	const [content, setContent] = useState(null);
	const [category, setCategory] = useState(null);
	const { user, setAuthTokens } = useAuth();

	function logOut() {
		setAuthTokens(null);
	}

	useEffect(() => dispatch(getCategories()), [dispatch]);

	function submitStatement() {
		if (!title) return;
		if (!description) return;
		if (!image) return;
		if (!content) return;
		dispatch(
			addStatement({
				title,
				category,
				description,
				image,
				content,
				author: user,
			})
		);
	}

	return (
		<div className="statement single user-console">
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
				<label htmlFor="tab-btn-2">New statement</label>
				<input
					type="radio"
					name="tab-btn"
					id="tab-btn-3"
					checked={tab.three}
					onChange={() => setTab({ one: false, two: false, three: true })}
				/>
				<label htmlFor="tab-btn-3">Gallery</label>

				<div id="content-1">
					<button className="sign-button upload-button" onClick={logOut}>
						Log Out
					</button>
				</div>
				<div id="content-2">
					<div className="new-statement-inputs">
						<input
							type="text"
							placeholder="Statement title"
							onChange={(e) => setTitle(e.target.value)}
						/>
						<textarea
							placeholder="Short description will be displayed in statements list"
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
								<option className="select-item">Cars</option>
								<option className="select-item">Gaming</option>
								<option className="select-item">Pc hardware</option>
							</datalist>
						</div>
					</div>
					<h2>Statement main content</h2>
					<EditorContext.Provider value={{ content, setContent }}>
						<Editor />
					</EditorContext.Provider>
					<button
						className="sign-button upload-button"
						onClick={submitStatement}>
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
