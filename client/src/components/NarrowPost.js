import React from 'react';
import { Link } from 'react-router-dom';

function WidePost(props) {
	if (!props.post) return <div className="narrow-post"> </div>;
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
			<img className="post-image" alt="" src={`${image}`} />
			<p className="post-description">{description}</p>
			<p className="post-date">{date}</p>
		</div>
	);
}

export default WidePost;
