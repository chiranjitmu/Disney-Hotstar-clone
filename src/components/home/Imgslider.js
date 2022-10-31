import React from 'react'
import styled from "styled-components"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Imgslider() {
     
    let settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slideshow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return (
     <Carousel {...settings}>
         <Wrap>
             <img src='main1.webp' alt=''/>

         </Wrap>
         <Wrap>
             <img src='main2.webp' alt=''/>
         </Wrap>
         <Wrap>
             <img src='main3.webp' alt=''/>
         </Wrap>
         <Wrap>
             <img src='main4.webp' alt=''/>
         </Wrap>   
         <Wrap>
             <img src='main5.webp' alt=''/>
         </Wrap>
     </Carousel>
  )
}

export default Imgslider


const Carousel = styled(Slider)`
     margin-top: 4px;
     margin-bottom: 1px;
     margin-left: 5px;
     margin-right: 5px;

     ul li button{

         &:before{
             font-size: 10px;
             color: aqua;
         }
     }

     li.slick-active button::before{
        color: white;
     }

`

const Wrap = styled.div`

    cursor: pointer;

    img{
        width: 100%;
        height: 300px;
        border-radius: 20px;
        border: 4px solid tranparent;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
            
        }

    }
`