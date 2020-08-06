import React, { useState } from 'react';
import Gallery from './Gallery';
import NewPost from './NewPost';
import UserPage from './UserPage';

function User() {
	const [tab, setTab] = useState({ one: true, two: false, three: false });
	return (
		<div className="post single user-console">
			<div className="tabs">
				<input
					type="radio"
					id="tab-btn-1"
					checked={tab.one}
					onChange={() => setTab({ one: true, two: false, three: false })}
				/>
				<label htmlFor="tab-btn-1">User's page</label>
				<input
					type="radio"
					id="tab-btn-2"
					checked={tab.two}
					onChange={() => setTab({ one: false, two: true, three: false })}
				/>
				<label htmlFor="tab-btn-2">New post</label>
				<input
					type="radio"
					id="tab-btn-3"
					checked={tab.three}
					onChange={() => setTab({ one: false, two: false, three: true })}
				/>
				<label htmlFor="tab-btn-3">Gallery</label>

				<div id="content-1">
					<UserPage />
				</div>
				<div id="content-2">
					<NewPost />
				</div>
				<div id="content-3">
					<Gallery />
				</div>
			</div>
		</div>
	);
}

export default User;
