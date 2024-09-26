import React from 'react';
import './cart.css';
import { Divider } from '@mui/material';

const Cart = () => {
  return (
    <div className='cart_section'>
        <div className='cart_container'>
           <div className='left_cart'>
              {/* <img /> */}
              <div className='cart_btn'>
                <button className='cart_btn1'>Add to Cart</button>
                <button className='cart_btn2'>Buy Now</button>
              </div>
           </div>
           <div className='right_cart'>
             <h3>Title1</h3>
             <h4>Title2</h4>
             <Divider />
             <p className='mrp'>MRP.</p>
             <p>Deal of the Day: <span style={{color: '#B12704'}}>Rs.</span></p>
             <p>You save: <span style={{color: '#B12704'}}>Rs.(%)</span></p>
             <div className='discount_box'>
                <h5>Discount: <span style={{color:'#111'}}>Extra % Off</span></h5>
                <h4>Free Delivery: <span style={{color:'#111', fontWeight:600}}>Oct 8 - 12</span> Details</h4>
                <p>Fastest Delivery: <span style={{color:'#111', fontWeight:600}}>Tommorow at (Time)</span></p>
             </div>
             <p className='description'>About the Item: <span style={{color:'#565959', fontSize:14, fontWeight:500, letterSpacing:'0.4px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eaque impedit pariatur voluptate corporis nulla consectetur placeat illo. Vel hic magni eius enim laudantium dolorum? Sequi minima sapiente quae unde?</span></p>
           </div>
        </div>
    </div>
  )
}

export default Cart;