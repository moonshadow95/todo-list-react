import React from 'react';

const Header = (props) => {
  return (
    <header>
      <span className="header-icon">
        <i className="fas fa-fire-alt"></i>
      </span>
      <h1 className="title">To-Do List for This Week </h1>
      <span className="total-count">{props.totalCount}</span>
    </header>
  );
};

export default Header;
