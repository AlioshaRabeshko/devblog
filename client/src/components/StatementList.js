import React, { useEffect } from 'react';
import Left from './Left';
import Pagination from './Pagination';
import NarrowStatement from './NarrowStatement';
import WideStatement from './WideStatement';
import { useDispatch, useSelector } from 'react-redux';
import { getStatements } from '../actions/statements';
import { useParams } from 'react-router-dom';

function StatementList(props) {
	const statements = useSelector((state) => state.statements.statements);
	const dispatch = useDispatch();
	const { author, category, query, page } = useParams();
	useEffect(() => {
		dispatch(getStatements(category, author, query, page));
		for (let i = window.scrollY; i > 0; i--)
			window.setTimeout(() => window.scrollTo(0, i), 100);
	}, [dispatch, author, category, query, page]);
	return (
		<div className="container">
			<div className="right-container">
				{statements.rows[0] ? (
					<WideStatement statement={statements.rows[0]} />
				) : (
					<WideStatement />
				)}
			</div>
			<Left />
			{statements.rows[0]
				? statements.rows.map((el, id) =>
						id !== 0 ? <NarrowStatement statement={el} key={id} /> : ''
				  )
				: ''}
			{statements.rows % 2 !== 0 ? <NarrowStatement /> : ''}
			<Pagination count={statements.count} />
		</div>
	);
}

export default StatementList;
