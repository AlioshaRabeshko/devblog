import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function WidePost(props) {
	if (!props.post) return <div className="narrow-post empty"> </div>;
	const { id, title, category, image, description, date } = props.post;
	return (
		<div className="narrow-post post">
			<p className="post-title">
				<Link to={`/post/${id}`} as="a">
					{title}
				</Link>
			</p>
			<p className="post-type">
				<Link to={`/category/${category}/`}>{category}</Link>
			</p>
			<LazyLoadImage
				effect="blur"
				className="post-image"
				alt=""
				src={`${image}`}
			/>
			<p className="post-description">{description}</p>
			<p className="post-date">{date}</p>
		</div>
	);
}

export default WidePost;
