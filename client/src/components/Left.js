import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import github from '../svgs/github.svg';

function Left() {
	const [query, setQuery] = useState(null);
	const [email, setEmail] = useState(null);
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
				<LazyLoadImage
					alt=""
					effect="blur"
					src="https://avatars3.githubusercontent.com/u/31666986?s=460"
					className="github-image"
				/>
				<a
					href="https://github.com/AlioshaRabeshko"
					name="github"
					aria-label="github">
					<p className="large github-name">
						<img className="github-icon" src={github} />
						Aliosha Rabeshko
					</p>
				</a>
			</div>
		</div>
	);
}

export default Left;
