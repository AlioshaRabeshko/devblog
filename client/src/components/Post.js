import React, { useEffect } from 'react';
import likeSvg from '../svgs/like.svg';
import dislikeSvg from '../svgs/dislike.svg';
import see from '../svgs/seen.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, verify, deletePost } from '../actions/posts';
import { getRate, putLike, putDislike } from '../actions/rating';
import { Redirect, Link, useHistory, useParams } from 'react-router-dom';
import PrivateComponent from './PrivateComponent';
import Comments from './Comments';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Post(props) {
	const { id } = useParams();
	const { post, loading } = useSelector((state) => state.posts);
	const { rate } = useSelector((state) => state.rate);
	const { user, token } = useSelector((state) => state.user.user);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPost(id));
	}, [dispatch, id]);
	useEffect(() => {
		if (user.id) dispatch(getRate(id, user.id));
	}, [dispatch, id, user]);
	function like() {
		if (token) dispatch(putLike(id, user.id));
	}
	function dislike() {
		if (token) dispatch(putDislike(id, user.id));
	}
	if (loading) return null;
	if (!id || !post) return <Redirect to="/undefined" />;
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
			<LazyLoadImage
				className="post-image-full"
				effect="blur"
				alt=""
				src={`${image}`}
			/>
			<p className="post-description">{description}</p>
			<div
				className="post-content"
				dangerouslySetInnerHTML={{
					__html: content ? content : null,
				}}
			/>
			<div className="moder-section">
				{!post.verified ? (
					<div className="verify">
						<PrivateComponent perm={50}>
							<button onClick={() => history.push(`/`)}>Decline</button>
						</PrivateComponent>
						<PrivateComponent perm={50}>
							<button onClick={() => dispatch(verify(id, user.id))}>
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
					<button onClick={() => dispatch(deletePost(id, user.id, history))}>
						Delete
					</button>
				</PrivateComponent>
			</div>
			<div className="post-footer">
				<p className="post-date">{createdAt.split('T')[0]}</p>
				<div className="footer-element">
					<img
						src={likeSvg}
						className={rate.liked === 1 ? 'rated' : null}
						alt=""
						onClick={like}
					/>
					<p>{rate.likes}</p>
				</div>
				<div className="footer-element">
					<img
						src={dislikeSvg}
						className={rate.liked === -1 ? 'rated' : null}
						alt=""
						onClick={dislike}
					/>
					<p>{rate.dislikes}</p>
				</div>
				<div className="footer-element">
					<img src={see} alt="" />
					<p>{seen}</p>
				</div>
			</div>
			<Comments postAuthor={props.postAuthor} />
		</div>
	);
}

export default Post;
