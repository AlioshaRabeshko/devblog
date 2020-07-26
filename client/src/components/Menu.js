import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<div className="top">
				<div className="menu-title">DevBlog</div>
				<ul className="menu-list">
					<li className="menu-item">
						<Link to="/" as="a">
							Main
						</Link>
					</li>
					<li className="menu-item">
						<Link to="/" as="a">
							About
						</Link>
					</li>
					<li className="menu-item">
						<Link to="/user" as="a">
							User
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Menu;
