import ReactPlayer from 'react-player'

const Eightthree = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/QHdkC6Kn0Io'
            width='100vw'
            height='40vw'
            controls={true}
          />
        </div>
      )
  }
export default Eightthree