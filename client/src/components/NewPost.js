import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { EditorContext } from '../context/editor';
import Editor from './Editor';
import { addPost } from '../actions/posts';

function Edit() {
	const { user } = useSelector((state) => state.user.user);
	const { categories } = useSelector((state) => state.posts);

	const [content, setContent] = useState(null);
	const [title, setTitle] = useState(null);
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState(null);
	const [category, setCategory] = useState(null);
	const [warn, setWarn] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();
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
		if (!category) {
			setWarn('No category');
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
					author: user.id,
				},
				history
			)
		);
	}
	return (
		<div>
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
	);
}

export default Edit;
