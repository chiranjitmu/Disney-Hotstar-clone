import React from 'react'
import ReactPlayer from 'react-player'

const RRR = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/GY4BgdUSpbE'
            width='100vw'
            height='40vw'
            controls={true}
          />
        </div>
      )
  }
export default RRR