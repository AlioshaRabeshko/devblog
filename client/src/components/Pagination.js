import React from 'react';
import { Link } from 'react-router-dom';

function Pagination(props) {
	const arr = [];
	const pages = Math.ceil(props.count / 7);
	for (let i = 1; i < pages - 1; i++) arr.push(i);
	if (pages === 1 || !props.count) return <ul className="pagination" />;
	return (
		<ul className="pagination">
			<li>
				<Link as="a" to="0">
					{'<<'}
				</Link>
			</li>
			{arr.map((el) => (
				<li>
					<Link as="a" to={`${el}`} key={el}>
						{el + 1}
					</Link>
				</li>
			))}
			<li>
				<Link as="a" to={`${pages - 1}`} disabled>
					{'>>'}
				</Link>
			</li>
		</ul>
	);
}

export default Pagination;
