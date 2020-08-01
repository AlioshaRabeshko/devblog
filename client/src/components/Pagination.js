import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ count }) {
	const pages = Math.ceil(count / 7);
	const links = new Array(pages).fill(0);
	if (pages <= 1) return <ul className="pagination" />;
	return (
		<ul className="pagination">
			{links.map((el, id) => (
				<li key={id}>
					<Link as="a" to={`${id}`}>
						{id + 1}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Pagination;
