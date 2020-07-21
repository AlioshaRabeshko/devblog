import React, { useState } from 'react';
import { useAuth } from '../context/auth';
import Editor from './Editor'
import Gallery from './Gallery'

function User(props) {
  const [tab, setTab] = useState({ one: true, two: false, three: false });
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens(null);
  }

  return (
    <div className="statement single user-console">
      <div className="tabs">
        <input
          type="radio"
          name="tab-btn"
          id="tab-btn-1"
          checked={tab.one}
          onChange={() => setTab({ one: true, two: false, three: false })} />
        <label htmlFor="tab-btn-1">User's page</label>
        <input
          type="radio"
          name="tab-btn"
          id="tab-btn-2"
          checked={tab.two}
          onChange={() => setTab({ one: false, two: true, three: false })} />
        <label htmlFor="tab-btn-2">New statement</label>
        <input
          type="radio"
          name="tab-btn"
          id="tab-btn-3"
          checked={tab.three}
          onChange={() => setTab({ one: false, two: false, three: true })} />
        <label htmlFor="tab-btn-3">Gallery</label>

        <div id="content-1">
          <button onClick={logOut}>Log Out</button>
        </div>
        <div id="content-2">
          <div className="new-statement-inputs">
            <input type="text" placeholder="Statement title" />
            <textarea placeholder="Short description will be displayed in statements list"></textarea>
          </div>
          <h2>Statement main content</h2>
          <Editor />
        </div>
        <div id="content-3">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default User;
