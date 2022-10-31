import React from 'react'
import ReactPlayer from 'react-player'

const Runway34 = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/Lb8mQCpZHco'
            width='100vw'
            height='40vw'
            controls={true}
          />
        </div>
      )
  }
export default Runway34