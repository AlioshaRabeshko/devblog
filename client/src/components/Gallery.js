import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImages, getImages } from '../actions/images';

function Gallery() {
	const user = useSelector((state) => state.user.user);
	const images = useSelector((state) => state.images.images);
	const dispatch = useDispatch();
	function uploadImg(e) {
		dispatch(uploadImages(e.target.files, user.shortName));
	}
	useEffect(() => dispatch(getImages(user.shortName)), [
		dispatch,
		user.shortName,
	]);
	function copyToClipboard(link) {
		const textField = document.createElement('textarea');
		textField.innerText = link;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
	}
	return (
		<div className="gallery-image-list">
			<div className="gallery-image" key={0}>
				<input
					className="img-input"
					type="file"
					id="img"
					name="img"
					accept="image/*"
					multiple
					onChange={uploadImg}
				/>
				<label htmlFor="img">Choose images to upload</label>
				<p className="or">Or upload from URL</p>
				<input type="text"></input>
				<button className="sign-button upload-button">Upload</button>
			</div>
			{images.images.map((el, id) => (
				<div
					className="gallery-image"
					key={id + 1}
					onClick={() =>
						copyToClipboard(`http://${images.host}:5000/api/images/${el.name}`)
					}>
					<img
						src={`http://${images.host}:5000/api/images/${el.name}`}
						alt=""
					/>
				</div>
			))}
		</div>
	);
}

export default Gallery;
