import React from 'react'
import ReactPlayer from 'react-player'

const Pushpa = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/pKctjlxbFDQ'
            width='100vw'
            height='40vw'
            controls={true}
          />
        </div>
      )
  }
export default Pushpa