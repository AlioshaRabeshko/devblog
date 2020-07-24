import React from 'react';
import { Link } from 'react-router-dom';

function WideStatement(props) {
	const { id, title, category, image, description, date } = props.statement;
	return (
		<div className="wide-statement statement">
			<p className="statement-title">
				<Link
					to={{ pathname: `/statement/${id}`, statement: props.statement }}
					as="a">
					{title}
				</Link>
			</p>
			<p className="statement-type">
				<Link to={`/category/${category}`}>{category}</Link>
			</p>
			<img className="statement-image" alt="" src={`http://${image}`} />
			<p className="statement-description">{description}</p>
			<p className="statement-date">{date}</p>
		</div>
	);
}

export default WideStatement;
