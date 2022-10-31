import React from 'react'
import ReactPlayer from 'react-player'

const Kgf2 = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/JKa05nyUmuQ'
            width='100vw'
            height='40vw'
            controls={true}
          />
        </div>
      )
  }
export default Kgf2