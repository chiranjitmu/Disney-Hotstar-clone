import ReactPlayer from 'react-player'
import React from 'react'

const Bhoolbhulaiyaa2 = () => {
      return (
        <div className='player-wrapper'>
         <ReactPlayer
              className='react-player'
              url= 'https://youtu.be/P2KRKxAb2ek'
              width='100vw'
              height='40vw'
              controls={true}
            />
        </div>
      )
  }

export default Bhoolbhulaiyaa2