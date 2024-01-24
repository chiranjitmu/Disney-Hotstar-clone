import ReactPlayer from 'react-player'
import React from 'react'



const BEAST = () => {



      return (
        <div className='player-wrapper' style={{width: '100vw', height: '40vw'}}>
              <ReactPlayer
              className='react-player'
              url= 'https://youtu.be/0q7bKjLa0Nc'
              width='100vw'
              height='40vw'
              controls={true}
            />

            {/* we can use anyone for video player */}
            {/* <iframe src="https://drive.google.com/file/d/1T-uPG3sSaRy6TRLzD_gdHPcjLHNBwHx4/preview"
           width='100%' height='100%' allow="autoplay"></iframe> */}
        </div>
      )
  }
export default BEAST