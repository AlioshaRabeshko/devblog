import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ count }) {
	const pages = Math.ceil(count / 7);
	const links = new Array(pages).fill(0);
	if (pages <= 1) return <ul className="pagination" />;
	return (
		<ul className="pagination">
			{/* <li>
				<Link as="a" to="0">
					{'<<'}
				</Link>
			</li> */}
			{links.map((el, id) => (
				<li>
					<Link as="a" to={`${id}`} key={id}>
						{id + 1}
					</Link>
				</li>
			))}
			{/* <li>
				<Link as="a" to={`${pages}`} disabled>
					{'>>'}
				</Link>
			</li> */}
		</ul>
	);
}

export default Pagination;
