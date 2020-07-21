import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<div className="top">
				<div className="menu-title">DevBlog</div>
				<li className="menu-list">
					<ul className="menu-item">
						<Link to="/" as="a">
							Main
						</Link>
					</ul>
					<ul className="menu-item">
						<Link to="/" as="a">
							About
						</Link>
					</ul>
					<ul className="menu-item">
						<Link to="/user" as="a">
							User
						</Link>
					</ul>
					{/* <ul className="menu-item"></ul> */}
				</li>
			</div>
		);
	}
}

export default Menu;
