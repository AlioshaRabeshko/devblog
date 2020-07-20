import React from 'react';

function User() {
  return (
    <div className="editor">
      <div
        className="editor-field"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        <br />
      </div>
    </div>
  );
}

export default User;
