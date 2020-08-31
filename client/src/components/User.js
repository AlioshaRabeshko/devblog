import React, { useState } from 'react';
import Gallery from './Gallery';
import NewPost from './NewPost';
import NewStatic from './NewStatic';
import UserPage from './UserPage';

function User() {
	const [tab, setTab] = useState(0);
	return (
		<div className="post single user-console">
			<div className="tabs">
				<input
					type="radio"
					id="tab-btn-1"
					checked={tab === 0}
					onChange={() => setTab(0)}
				/>
				<label htmlFor="tab-btn-1">User's page</label>
				<input
					type="radio"
					id="tab-btn-2"
					checked={tab === 1}
					onChange={() => setTab(1)}
				/>
				<label htmlFor="tab-btn-2">New post</label>
				<input
					type="radio"
					id="tab-btn-3"
					checked={tab === 2}
					onChange={() => setTab(2)}
				/>
				<label htmlFor="tab-btn-3">New static page</label>
				<input
					type="radio"
					id="tab-btn-4"
					checked={tab === 3}
					onChange={() => setTab(3)}
				/>
				<label htmlFor="tab-btn-4">Gallery</label>

				<div id="content-1">
					<UserPage />
				</div>
				<div id="content-2">
					<NewPost />
				</div>
				<div id="content-3">
					<NewStatic />
				</div>
				<div id="content-4">
					<Gallery />
				</div>
			</div>
		</div>
	);
}

export default User;
