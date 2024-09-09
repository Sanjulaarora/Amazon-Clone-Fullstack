import React from 'react';
import './navbar.css';
import logo from '../../images/amazon_logo.png';

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="logo">
            <img src={logo} alt="amazon_logo" />
          </div>
          <div>
            <input type="text" placeholder="Search It!" />
          </div>
        </div>
        <div className="right">

        </div>
      </nav>
    </header>
  )
}

export default NavBar;