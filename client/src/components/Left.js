import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGit } from '../actions/github';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Left() {
	const [query, setQuery] = useState(null);
	const [email, setEmail] = useState(null);
	const { github } = useSelector((state) => state.github);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGit());
	}, [dispatch]);
	return (
		<div className="left-container">
			<div className="left-widget input">
				<div>
					<label htmlFor="search">Find post</label>
					<input
						type="text"
						id="search"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Link to={query ? `/search/${query}/` : ''}>
						<button>Search</button>
					</Link>
				</div>
			</div>
			<div className="left-widget input">
				<div>
					<label htmlFor="subscribe">Subscribe on news</label>
					<input id="subscribe" type="text" placeholder="Email" />
					<button>Subscribe</button>
				</div>
			</div>
			<div className="left-widget github">
				<p className="large">GitHub</p>
				<LazyLoadImage alt="" effect="blur" src={github.image} />
				<br />
				<a href={github.url} name="github" aria-label="github">
					<p className="large">{github.userName}</p>
				</a>
			</div>
		</div>
	);
}

export default Left;
