import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Left() {
	const [query, setQuery] = useState(null);
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
			<div className="left-widget github">GitHub page...</div>
		</div>
	);
}

export default Left;
