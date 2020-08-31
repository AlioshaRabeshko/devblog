import React, { useEffect } from 'react';
import Left from './Left';
import Pagination from './Pagination';
import NarrowPost from './NarrowPost';
import WidePost from './WidePost';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';
import { useParams } from 'react-router-dom';

function PostList(props) {
	const { posts, loading } = useSelector((state) => state.posts);
	const { author, category, query, page } = useParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPosts(category, author, query, page));
		for (let i = window.scrollY; i > 0; i--)
			window.setTimeout(() => window.scrollTo(0, i), 100);
	}, [dispatch, author, category, query, page]);
	if (loading) return null;
	return (
		<div className="container list-container">
			<div className="right-container">
				<WidePost post={posts.rows[0]} />
			</div>
			<Left />
			{posts.rows.map((el, id) =>
				id !== 0 ? <NarrowPost post={el} key={id} /> : null
			)}
			{posts.rows.length - 1 < 7 && (posts.rows.length - 1) % 2 !== 0 ? (
				<NarrowPost />
			) : (
				''
			)}
			<Pagination count={posts.count} />
		</div>
	);
}

export default PostList;
