import React from 'react';
import './navbar.css';
import logo from '../../images/amazon_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src={logo} alt="amazon_logo" />
          </div>
          <div className="nav_searchbar">
            <input type="text" placeholder="Search Your Products" />
            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <a>SignIn</a>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon id="icon" />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className='avtar' />
        </div>
      </nav>
    </header>
  )
}

export default NavBar;