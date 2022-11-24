import ReactPlayer from 'react-player'
import React from 'react'

const Bachchhanpaandey = () => {
      return (
        <div className='player-wrapper'>
         <ReactPlayer
              className='react-player'
              url= 'https://youtu.be/4d8m59ct2wQ'
              width='100vw'
              height='40vw'
              controls={true}
            />
        </div>
      )
  }

export default Bachchhanpaandey