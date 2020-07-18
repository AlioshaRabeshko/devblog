import React from 'react';

class WideStatement extends React.Component {
  render() {
    return (
      <div className="wide-statement">
        <p className="statement-title"><a>{this.props.statement.title}</a></p>
        <p className="statement-type">{this.props.statement.type}</p>
        <img className="statement-image" src={this.props.statement.image} />
        <p className="statement-description">{this.props.statement.description}</p>
        <p className="statement-date">{this.props.statement.date}</p>
      </div>
    )
  }
}

export default WideStatement;
