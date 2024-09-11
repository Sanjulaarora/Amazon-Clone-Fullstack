import React from 'react';
import './navbar.css';
import logo from '../../images/amazon_logo.png';

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src={logo} alt="amazon_logo" />
          </div>
          <div className="nav_Searchbar">
            <input type="text" placeholder="Search Your Products" />
            <div className="search_icon">
              
            </div>
          </div>
        </div>
        <div className="right">

        </div>
      </nav>
    </header>
  )
}

export default NavBar;