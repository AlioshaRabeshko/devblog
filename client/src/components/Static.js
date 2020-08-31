import React, { useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PrivateComponent from './PrivateComponent';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getStatic } from '../actions/posts';

const Static = () => {
	const { page } = useParams();
	const { staticPost, loading } = useSelector((state) => state.posts);
	// const { user, token } = useSelector((state) => state.user.user);
	const { title, content } = staticPost;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStatic(page));
	}, [dispatch, page]);
	if (loading) return null;
	if (!staticPost || staticPost === '') return <Redirect to="/undefined" />;
	return (
		<div className="post single">
			{title ? <p className="post-title">{title}</p> : null}
			<div
				className="post-content"
				dangerouslySetInnerHTML={{
					__html: content ? content : null,
				}}
			/>
			<div className="moder-section">
				<PrivateComponent perm={999}>
					<Link className="sign-button" to={`/editstatic/${page}`}>
						Edit
					</Link>
				</PrivateComponent>
			</div>
		</div>
	);
};

export default Static;
