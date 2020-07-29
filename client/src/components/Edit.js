import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { EditorContext } from '../context/editor';
import Editor from './Editor';
import { getPost, editPost } from '../actions/posts';

function Edit() {
	const { user } = useSelector((state) => state.user.user);
	const { categories, post } = useSelector((state) => state.posts);
	const { id } = useParams();
	const [content, setContent] = useState(null);
	const [title, setTitle] = useState(null);
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState(null);
	const [category, setCategory] = useState(null);
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPost(id));
	}, [dispatch, id]);
	function applyEdit() {
		const obj = {};
		if (content !== post.content) obj.content = content;
		if (title !== post.title) obj.title = title;
		if (image !== post.image) obj.image = image;
		if (category !== post.category) obj.category = category;
		if (description !== post.description) obj.description = description;
		dispatch(editPost(id, user.id, obj, () => history.push(`/post/${id}`)));
	}
	if (user.verified <= 50) return <Redirect to={`/post/${id}`} />;
	return (
		<div className="single edit-post">
			<br />
			<div className="new-post-inputs">
				<input
					type="text"
					placeholder="Post title"
					onChange={(e) => setTitle(e.target.value)}
					defaultValue={post.title}
				/>
				<textarea
					placeholder="Short description will be displayed in Posts list"
					onChange={(e) => setDescription(e.target.value)}
					defaultValue={post.description}
				/>
				<div className="select">
					<input
						type="text"
						placeholder="Image URL"
						onChange={(e) => setImage(e.target.value)}
						defaultValue={post.image}
					/>
					<label>Category:</label>
					<input
						className="categories"
						type="text"
						name="product"
						list="categories"
						onChange={(e) => setCategory(e.target.value)}
						defaultValue={post.category}
					/>
					<datalist id="categories">
						{categories.map((el, id) => (
							<option key={id} className="select-item">
								{el.category}
							</option>
						))}
					</datalist>
				</div>
			</div>
			<h2>Post's main content</h2>
			<EditorContext.Provider value={{ content: post.content, setContent }}>
				<Editor />
			</EditorContext.Provider>
			{/* <p className="sign-error text-center">{warn}</p> */}
			<button className="sign-button upload-button">Delete</button>
			<button className="sign-button upload-button" onClick={applyEdit}>
				Save
			</button>
		</div>
	);
}

export default Edit;
