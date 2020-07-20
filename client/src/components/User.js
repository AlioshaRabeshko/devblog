import React from 'react';
import { useAuth } from '../context/auth';
import Editor from './Editor'

const statement = {
  title: 'User\'s page'
}

function User(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens(null);
  }

  return (
    <div className="statement single">
      <p className="statement-title">{statement.title}</p>
      <Editor />
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default User;
