import React from 'react'
import ReactPlayer from 'react-player'

const James = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/LAPgeW_cUrI'
            width='100vw'
            height='40vw'
            controls={true}
          />      
        </div>
      )
  }
export default James