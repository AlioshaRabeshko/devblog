import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImages, getImages, uploadFromLink } from '../actions/images';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Gallery() {
	const { user } = useSelector((state) => state.user.user);
	const { images } = useSelector((state) => state.images);
	const [imageUrl, setImageUrl] = useState('');
	const dispatch = useDispatch();
	function uploadImg(e, name) {
		dispatch(uploadImages(e.target.files, name));
	}
	useEffect(() => dispatch(getImages(user.id)), [dispatch, user]);
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
					onChange={(e) => uploadImg(e, user.id)}
				/>
				<label htmlFor="img">Choose images to upload</label>
				<p className="or">Or upload from URL</p>
				<input
					type="text"
					onChange={(e) => setImageUrl(e.target.value)}></input>
				<button
					className="sign-button upload-button"
					onClick={() =>
						imageUrl !== ''
							? dispatch(uploadFromLink(imageUrl, user.id))
							: console.log('empty')
					}>
					Upload
				</button>
			</div>
			{images.images.map((el, id) => (
				<div
					className="gallery-image"
					key={id + 1}
					onClick={() =>
						copyToClipboard(`http://${images.host}:5000/api/images/${el.name}`)
					}>
					<LazyLoadImage
						src={`http://${images.host}:5000/api/images/${el.name}`}
						alt=""
						effect="blur"
					/>
				</div>
			))}
		</div>
	);
}

export default Gallery;
