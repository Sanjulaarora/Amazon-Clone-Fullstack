import React, { useEffect, useState } from 'react';
import './cart.css';
import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';

const Cart = () => {
 
 const {id} = useParams("");

 const [indiData, setIndiData] = useState([]);
 console.log(indiData);

 const getindidata = async() => {
  const res = await fetch(`/getproductsindi/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  //console.log(data);

  if(res.status !== 201) {
    console.log("No data available");
  } else {
    console.log("getData");
    setIndiData(data);
  }

 }

 useEffect(() => {
   getindidata();
 });

  return (
    <div className='cart_section'>
      {indiData && Object.keys(indiData).length && 
        <div className='cart_container'>
          <div className='left_cart'>
            <img src={indiData.detailUrl} alt="cart_img"/>
            <div className='cart_btn'>
              <button className='cart_btn1'>Add to Cart</button>
              <button className='cart_btn2'>Buy Now</button>
            </div>
          </div>
          <div className='right_cart'>
            <h3>{indiData.title.shortTitle}</h3>
            <h4>{indiData.title.longTitle}</h4>
            <Divider />
            <p className='mrp'>M.R.P. : {indiData.price.mrp}</p>
            <p>Deal of the Day: <span style={{color: '#B12704'}}>Rs.{indiData.price.cost}</span></p>
            <p>You save: <span style={{color: '#B12704'}}>Rs. {indiData.price.mrp - indiData.price.cost}</span></p>
            <div className='discount_box'>
              <h5>Discount: <span style={{color:'#111'}}>{indiData.discount} Off</span></h5>
              <h4>Free Delivery: <span style={{color:'#111', fontWeight:600}}>Oct 8 - 12</span> Details</h4>
              <p>Fastest Delivery: <span style={{color:'#111', fontWeight:600}}>Tommorow at 11 A.M.</span></p>
            </div>
            <p className='description'>About the Item: <span style={{color:'#565959', fontSize:14, fontWeight:500, letterSpacing:'0.4px'}}>{indiData.description}</span></p>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart;