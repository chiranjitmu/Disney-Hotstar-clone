// import React, { useEffect, useState } from 'react'
// import db from 'firebase/firestore';
import ReactPlayer from 'react-player'



const BEAST = () => {


//   const [abcd, setAbcd] = useState([]);

//   useEffect(() => {

//     db.collection('abcd').onSnapshot(snapshot =>
//       (setAbcd(snapshot.docs.map(doc => doc.data()))
     
//       ))
  
//     }, [])



      return (
        <div className='player-wrapper' style={{width: '100vw', height: '40vw'}}>
          {/* {abcd.map(({video}) => ( */}
              <ReactPlayer
              className='react-player'
              url= 'https://youtu.be/0q7bKjLa0Nc'
              width='100vw'
              height='40vw'
              controls={true}
            />

            {/* we can use anyone for video player */}
            {/* <iframe src="https://drive.google.com/file/d/1T-uPG3sSaRy6TRLzD_gdHPcjLHNBwHx4/preview"
           width='100%' height='100%' allow="autoplay"></iframe> */}
        </div>
      )
  }
export default BEAST