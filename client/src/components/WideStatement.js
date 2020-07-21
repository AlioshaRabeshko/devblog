import React from 'react';
import { Link } from 'react-router-dom';

class WideStatement extends React.Component {
	render() {
		return (
			<div className="wide-statement statement">
				<p className="statement-title">
					<Link
						to={{ pathname: '/statement', statement: this.props.statement }}
						as="a">
						{this.props.statement.title}
					</Link>
				</p>
				<p className="statement-type">{this.props.statement.type}</p>
				<img
					className="statement-image"
					alt=""
					src={this.props.statement.image}
				/>
				<p className="statement-description">
					{this.props.statement.description}
				</p>
				<p className="statement-date">{this.props.statement.date}</p>
			</div>
		);
	}
}

export default WideStatement;
