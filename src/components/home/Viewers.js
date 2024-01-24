import React from 'react'
import './Viewers.css';
import HoverVideoPlayer from 'react-hover-video-player';

function Viewers() {
  return (
      <div className='main_viewers' id='main_viewers_mobile'>
        <container>

             
        <HoverVideoPlayer
        style={{width: '12.2rem', height:'6.4rem', padding: '0.4rem'}}
        videoSrc="disney.mp4"
        pausedOverlay={
        <img className='view_1' id='view_mobile'
          src="746347-h.webp"
          alt=""/>
        }
        />


        <HoverVideoPlayer 
        style={{width: '12.2rem', height:'6.4rem', padding: '0.4rem'}}
        videoSrc="pixar.mp4"
        pausedOverlay={
        <img className='view_2' id='view_mobile'
          src="746348-h.webp"
          alt=""/>
        }
        />

        <HoverVideoPlayer 
        style={{width: '12.2rem', height:'6.4rem', padding: '0.4rem'}}
        videoSrc="marvel.mp4"
        pausedOverlay={
        <img className='view_3' id='view_mobile'
          src="746349-h.webp"
          alt=""/>
        }
        />

        <HoverVideoPlayer 
        style={{width: '12.2rem', height:'6.4rem', padding: '0.4rem'}}
        videoSrc="star-wars.mp4"
        pausedOverlay={
        <img className='view_4' id='view_mobile'
          src="746357-h.webp"
          alt=""/>
        }
        />

        <HoverVideoPlayer 
        style={{width: '12.2rem', height:'6.4rem', padding: '0.4rem'}}
        videoSrc="national-geographic.mp4"
        pausedOverlay={
        <img className='view_5' id='view_mobile'
          src="746355-h.webp"
          alt=""/>
        }
        />

        </container>
      </div>
  )
}

export default Viewers