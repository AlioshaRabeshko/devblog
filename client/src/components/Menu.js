import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const Menu = () => {
	const { pathname } = useLocation();
	return (
		<div className="top">
			<div className="menu-title">DevBlog</div>
			<ul className="menu-list">
				<li className="menu-item">
					<NavLink to="/" as="a" exact>
						Main
					</NavLink>
				</li>
				<li className="menu-item">
					<NavLink to="/static/about" as="a">
						About
					</NavLink>
				</li>
				<li className="menu-item">
					<NavLink to="/cv" as="a">
						CV
					</NavLink>
				</li>
				<li className="menu-item">
					<NavLink
						to="/user"
						as="a"
						className={pathname === '/sign' ? 'active' : null}>
						User
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
