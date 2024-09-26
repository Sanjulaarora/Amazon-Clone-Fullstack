import React from 'react';
import './buynow.css';
import { Divider } from '@mui/material';
import Option from './Option';
import SubTotal from './SubTotal';
import Right from './Right';

const BuyNow = () => {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
           <div className='left_buy'>
               <h1>Shopping Cart</h1>
               <p>Select all items</p>
               <span className='leftBuyPrice'>Price</span>
               <Divider />

               <div className='item_container'>
                  <img />
                  <div className='item_details'>
                     <h3>Title</h3>
                     <h3>Title</h3>
                     <h3 className='differentPrice'>Rs.</h3>
                     <p className='unusuall'>Usually dispatched in 3 Days.</p>
                     <p>Eligible for FREE Shipping</p>
                     <img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png' alt='logo'/>
                     <Option />
                  </div>
                  <h3 className='item_price'>Rs. /-</h3>
               </div>
               <Divider />
               <SubTotal />
           </div>
           <Right />
        </div>
    </div>
  )
}

export default BuyNow;