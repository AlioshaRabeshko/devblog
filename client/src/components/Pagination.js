import React from 'react';
import { Link } from 'react-router-dom';

class WideStatement extends React.Component {
  render() {
    return (
      <ul className="pagination">
        <Link as="a" to="/"><li>{'<'}</li></Link>
        <Link as="a" to="/"><li>1</li></Link>
        <Link as="a" to="/"><li>2</li></Link>
        <Link as="a" to="/"><li>3</li></Link>
        <Link as="a" to="/"><li>4</li></Link>
        <Link as="a" to="/"><li>{'>'}</li></Link>
      </ul>
    )
  }
}

export default WideStatement;
