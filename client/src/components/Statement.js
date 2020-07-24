import React, { useEffect } from 'react';
import like from '../svgs/like.svg';
import dislike from '../svgs/dislike.svg';
import see from '../svgs/seen.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getStatement } from '../actions/statements';
import { Redirect } from 'react-router-dom';

function Statement(props) {
	const statement = useSelector((state) => state.statements.statement);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getStatement(props.match.params.id)), []);
	if (!props.match.params.id) return <Redirect to="/undefined" />;
	if (statement) {
		const {
			title,
			category,
			image,
			description,
			content,
			createdAt,
			likes,
			dislikes,
			seen,
		} = statement;
		return (
			<div className="statement single">
				<p className="statement-title">{title}</p>
				<p className="statement-type">{category}</p>
				<img className="statement-image-full" alt="" src={`http://${image}`} />
				<p className="statement-description">{description}</p>
				<div
					className="statement-content"
					dangerouslySetInnerHTML={{
						__html: content ? content : '',
					}}></div>
				<div className="statement-footer">
					<p className="statement-date">{createdAt.split('T')[0]}</p>
					<div className="footer-element">
						<img src={like} alt="" />
						<p>{likes}</p>
					</div>
					<div className="footer-element">
						<img src={dislike} alt="" />
						<p>{dislikes}</p>
					</div>
					<div className="footer-element">
						<img src={see} alt="" />
						<p>{seen}</p>
					</div>
				</div>
			</div>
		);
	}
	return <div></div>;
}

export default Statement;
