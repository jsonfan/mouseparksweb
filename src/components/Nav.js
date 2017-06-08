import React from 'react';
import { Link } from 'react-router';

import './Nav.css';

function Nav(props) {
  return (
    <nav className="menu">
      <ul>
        <li className="brand"><Link to="/">MouseParks</Link></li>
        <li><Link to="/guides">Guides</Link></li>
        <li>
          <Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
