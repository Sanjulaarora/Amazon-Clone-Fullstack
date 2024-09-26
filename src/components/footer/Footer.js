import React from 'react';
import './footer.css';
import  logo from '../../images/amazon_logo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_details_one">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
        </div>
        <div className="footer_details_one">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>WhatsApp</p>
        </div>
        <div className="footer_details_one forres">
          <h3>Make Money with Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
        </div>
        <div className="footer_details_one forres">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
        </div>
      </div>  
      <div className="lastdetails">
        <img src={logo} alt="amazon_logo"/>
        <p>Conditions of Use & Sale &nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp; Interest-Based Ads &nbsp;&nbsp;&nbsp; &copy;1996 - {year}, Amazon.com, Inc or Its Affiliates</p>
      </div>
    </footer>
  )
}

export default Footer;