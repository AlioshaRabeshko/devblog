import React, { useEffect } from 'react';
import likeSvg from '../svgs/like.svg';
import dislikeSvg from '../svgs/dislike.svg';
import see from '../svgs/seen.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
	getPost,
	getRate,
	putLike,
	putDislike,
	verify,
	deletePost,
} from '../actions/posts';
import { Redirect, Link, useHistory } from 'react-router-dom';
import PrivateComponent from './PrivateComponent';

function Post(props) {
	const history = useHistory();
	const user = useSelector((state) => state.user.user);
	const { post, rate } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const { id } = props.match.params;

	useEffect(() => {
		dispatch(getPost(id));
		dispatch(getRate(id));
	}, [dispatch, id]);
	function like() {
		if (user.token) dispatch(putLike(id, user.user.id));
	}
	function dislike() {
		if (user.token) dispatch(putDislike(id, user.user.id));
	}
	if (!id) return <Redirect to="/undefined" />;
	if (post) {
		const {
			title,
			category,
			image,
			description,
			content,
			createdAt,
			seen,
		} = post;
		return (
			<div className="post single">
				<p className="post-title">{title}</p>
				<p className="post-type">{category}</p>
				<img className="post-image-full" alt="" src={`${image}`} />
				<p className="post-description">{description}</p>
				<div
					className="post-content"
					dangerouslySetInnerHTML={{
						__html: content ? content : '',
					}}
				/>
				<div className="moder-section">
					{!post.verified ? (
						<div className="verify">
							<PrivateComponent perm={50}>
								<button onClick={() => history.push(`/`)}>Decline</button>
							</PrivateComponent>
							<PrivateComponent perm={50}>
								<button onClick={() => dispatch(verify(id, user.user.id))}>
									Accept
								</button>
							</PrivateComponent>
						</div>
					) : (
						<div />
					)}
					<PrivateComponent perm={50}>
						<Link className="sign-button" to={`/edit/${id}`}>
							Edit
						</Link>
					</PrivateComponent>
					<PrivateComponent perm={50}>
						<button
							onClick={() => dispatch(deletePost(id, user.user.shortName))}>
							Delete
						</button>
					</PrivateComponent>
				</div>
				<div className="post-footer">
					<p className="post-date">{createdAt.split('T')[0]}</p>
					<div className="footer-element">
						<img src={likeSvg} alt="" onClick={like} />
						<p>{rate ? rate.likes : 0}</p>
					</div>
					<div className="footer-element">
						<img src={dislikeSvg} alt="" onClick={dislike} />
						<p>{rate ? rate.dislikes : 0}</p>
					</div>
					<div className="footer-element">
						<img src={see} alt="" />
						<p>{seen}</p>
					</div>
				</div>
			</div>
		);
	}
	return <div />;
}

export default Post;
