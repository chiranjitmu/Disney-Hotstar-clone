import React from 'react'
import './Home.css';
import Imgslider from '../home/Imgslider';
import Viewers from '../home/Viewers';
import Disclaimer from '../home/Disclaimer';
import Recommended from '../home/homemovies/Homemovies';


function Home() {
  return (
   <div>
        <div className='home'>
           <container>
              <Imgslider />
              <Viewers />
              <Recommended />
           </container>
        </div>
          <Disclaimer />
       </div>
  )
}

export default Home