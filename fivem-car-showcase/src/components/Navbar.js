import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">Debadge</li>
        <li className="navbar-item">Test2</li>
      </ul>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
      <div className="price-filter">
        <label>Price Filter:</label>
        <input type="range" min="0" max="100000" />
      </div>
    </nav>
  );
};

export default Navbar;