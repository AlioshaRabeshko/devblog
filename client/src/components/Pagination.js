import React from 'react';
import { Link } from 'react-router-dom';

function Pagination(props) {
	const arr = [];

	const pages = Math.ceil(props.count / 7);
	for (let i = 1; i < pages - 1; i++) arr.push(i);
	if (pages === 1) return <ul className="pagination"></ul>;
	return (
		<ul className="pagination">
			<Link as="a" to="0">
				<li>{'<<'}</li>
			</Link>
			{arr.map((el) => (
				<Link as="a" to={`${el}`} key={el}>
					<li>{el + 1}</li>
				</Link>
			))}
			<Link as="a" to={`${pages - 1}`} disabled>
				<li>{'>>'}</li>
			</Link>
		</ul>
	);
}

export default Pagination;
