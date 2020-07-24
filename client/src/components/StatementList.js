import React, { useEffect } from 'react';
import Left from './Left';
import Pagination from './Pagination';
import NarrowStatement from './NarrowStatement';
import WideStatement from './WideStatement';
import { useDispatch, useSelector } from 'react-redux';
import { getStatements } from '../actions/statements';

function StatementList(props) {
	console.log(props.match);
	const statements = useSelector((state) => state.statements.statements);
	const dispatch = useDispatch();
	const { author, category, query } = props.match.params;
	useEffect(() => dispatch(getStatements(category, author, query)), [
		dispatch,
		author,
		category,
		query,
	]);
	return statements[0] ? (
		<div className="container">
			<div className="right-container">
				<WideStatement statement={statements[0]} />
			</div>
			<Left />
			{statements.map((el, id) =>
				id !== 0 ? <NarrowStatement statement={el} key={id} /> : ''
			)}
			{statements % 2 !== 0 ? <NarrowStatement /> : ''}
			<Pagination />
		</div>
	) : (
		<div></div>
	);
}

export default StatementList;
