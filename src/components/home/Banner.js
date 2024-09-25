import React from 'react';
import './banner.css';
import Carousel from 'react-material-ui-carousel';

const data = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/AugArt24_Logo_75x75/J24_PC_Teaser_Header_Unrec_Prime_25th.jpg",
  "https://rukmini.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukmini.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]
const Banner = () => {
  return (
    <Carousel
      className='carousel'
      autoPlay={true}
      animation='slide'
      indicators={false}
      navButtonsAlwaysInvisible={true}
      cycleNavigation={true}
      // navButtonsProps={{
      //   style:{
      //     backgroundColor:'#fff',
      //     color:'#494949',
      //     borderRadius:0,
      //     marginTop:-22,
      //     height: "104px",
      //   }
      // }}
    >
      {
        data.map((img, i)=>{
          return (
            <>
              <img src={img} alt="" className='banner_img'/>
            </>
          )
        })
      }
    </Carousel>
  )
}

export default Banner;