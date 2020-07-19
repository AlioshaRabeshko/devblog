import React from 'react';

class Left extends React.Component {
  render() {
    return (
      <div className="left-container">
        <div className="left-widget input">
          <p>Find statement</p>
          <div>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
        <div className="left-widget input">
          <p>Subscribe on news</p>
          <div>
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="left-widget github">
          GitHub page...
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    )
  }
}

export default Left;