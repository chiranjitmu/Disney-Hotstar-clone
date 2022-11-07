import React from 'react'
import './Home.css';
import Imgslider from '../home/Imgslider';
import Viewers from '../home/Viewers';
import Homemovies from '../home/homemovies/Homemovies';
import Footer from '../home/Footer';


function Home() {
  return (
        <div className='home'>
           <container>
              <div className='imgslider'>
              <Imgslider />
             </div>
              <Viewers />
              <Homemovies />
              <Footer />
           </container>
        </div>
  )
}

export default Home