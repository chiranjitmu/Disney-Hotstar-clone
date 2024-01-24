import React from 'react'
import './Movies.css'
import Hindi from '../../json/homejson/hindihome.json'
import Kannada from '../../json/homejson/kannadahome.json'

import {AiOutlineArrowRight} from 'react-icons/ai'

function Movies() {
  return (
    <div className='movies'>
      <h1>ALLMOVIES</h1>


       <h2 className='hindi_word'>Hindi</h2>
           <container className='hindi_only'>
           {Hindi.map((list) => 
            <div className='hindi_list'>  
            <a href={list.movie}>
             <img className='hindi_img' src={list.img} alt='' id='img_size_mobile'></img></a>
             </div> 
           )}
          <a href='/movies/hindi'>
            <AiOutlineArrowRight className='arrowright'/></a>
          </container>


          <h2 className='kannada_word'>kannada</h2>
           <container className='hindi_only'>
           {Kannada.map((list) => 
            <div className='kannada_list'>  
            <a href={list.movie}>
             <img className='kannada_img' src={list.img} alt='' id='img_size_mobile'></img></a>
             </div> 
           )}
          <a href='/movies/kannada'>
            <AiOutlineArrowRight className='arrowright'/></a>
          </container>




    
    </div>
  )
}

export default Movies