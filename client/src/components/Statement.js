import React, { useEffect } from 'react';
import likeSvg from '../svgs/like.svg';
import dislikeSvg from '../svgs/dislike.svg';
import see from '../svgs/seen.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
	getStatement,
	getRate,
	putLike,
	putDislike,
} from '../actions/statements';
import { Redirect } from 'react-router-dom';

function Statement(props) {
	const user = useSelector((state) => state.user.user);
	const { statement, rate } = useSelector((state) => state.statements);
	const dispatch = useDispatch();
	const { id } = props.match.params;

	useEffect(() => {
		dispatch(getStatement(id));
		dispatch(getRate(id));
	}, [dispatch, id]);
	function like() {
		if (user.token) dispatch(putLike(id, user.user.id));
	}
	function dislike() {
		if (user.token) dispatch(putDislike(id, user.user.id));
	}
	if (!id) return <Redirect to="/undefined" />;
	if (statement) {
		const {
			title,
			category,
			image,
			description,
			content,
			createdAt,
			seen,
		} = statement;
		return (
			<div className="statement single">
				<p className="statement-title">{title}</p>
				<p className="statement-type">{category}</p>
				<img className="statement-image-full" alt="" src={`${image}`} />
				<p className="statement-description">{description}</p>
				<div
					className="statement-content"
					dangerouslySetInnerHTML={{
						__html: content ? content : '',
					}}></div>
				<div className="statement-footer">
					<p className="statement-date">{createdAt.split('T')[0]}</p>
					<div className="footer-element">
						<img src={likeSvg} alt="" onClick={like} />
						<p>{rate ? rate.likes : 0}</p>
					</div>
					<div className="footer-element">
						<img src={dislikeSvg} alt="" onClick={dislike} />
						<p>{rate ? rate.dislikes : 0}</p>
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
