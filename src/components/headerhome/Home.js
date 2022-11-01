import React from 'react'
import './Home.css';
import Imgslider from '../home/Imgslider';
import Viewers from '../home/Viewers';
import Recommended from '../home/homemovies/Homemovies';


function Home() {
  return (
        <div className='home'>
           <container>
              <Imgslider />
              <Viewers />
              <Recommended />
           </container>
        </div>
  )
}

export default Home