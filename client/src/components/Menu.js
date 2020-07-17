import React from 'react';

class Menu extends React.Component {
  render() {
    return <div className="top">
      <div className="menu-title">DevBlog</div>
      <li className="menu-list">
        <ul className="menu-item" href="#"><a>Main</a></ul>
        <ul className="menu-item" href="#"><a>About</a></ul>
        <ul className="menu-item" href="#"><a>User</a></ul>
        {/* <ul className="menu-item"></ul> */}
      </li>
    </div>
  }
}

export default Menu;
