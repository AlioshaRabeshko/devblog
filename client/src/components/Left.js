import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGit } from '../actions/github';

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
				<img alt="" src={github.image} />
				<br />
				<a href={github.url}>
					<p className="large">GitHub: {github.userName}</p>
				</a>
				<p>
					Followers:{github.followers} | Following:{github.following}
				</p>
				{/* {console.log(github)} */}
				{github.repos.map((el, id) => (
					<a href={el.repoUrl} key={id}>
						<p className="repo">{el.name}</p>
					</a>
				))}
			</div>
		</div>
	);
}

export default Left;
