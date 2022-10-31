import ReactPlayer from 'react-player'

const Kantara = () => {
      return (
        <div className='player-wrapper'>
         <ReactPlayer
              className='react-player'
              url= 'https://youtu.be/8mrVmf239GU'
              width='100vw'
              height='40vw'
              controls={true}
            />
        </div>
      )
  }

export default Kantara