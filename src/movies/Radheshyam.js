import React from 'react'
import ReactPlayer from 'react-player'

const Radheshyam = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/ZAP6q_Zv-4g'
            width='100vw'
            height='40vw'
            controls={true}
          />
        </div>
      )
  }
export default Radheshyam