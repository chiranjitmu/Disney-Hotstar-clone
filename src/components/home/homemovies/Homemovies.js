import React from 'react'
import './Homemovies.css'
import Recommend from '../../../json/homejson/recommendedhome.json'
import Hindi from '../../../json/homejson/hindihome.json'
import Kannada from '../../../json/homejson/kannadahome.json'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Homemovies() {
  return (
    <div className='movies_container'>

      {/* recommend */}

         <h1 className='Recommended_word'>Recommended For You</h1>
           <container className='recommended_only'>
           {Recommend.map((list) => 
            <div className='recommended_list'>  
            <a href={list.movie}>
             <img className='recommended_img' src={list.img} alt=''  id='img_size_mobile'></img></a>
             </div> 
           )}
          <a href='./recommends'>
            <AiOutlineArrowRight className='arrowright'/></a>
          </container>


{/* hindi */}

          <h1 className='hindi_word'>Hindi</h1>
           <container className='hindi_only'>
           {Hindi.map((list) => 
            <div className='hindi_list'>  
            <a href={list.movie}>
             <img className='hindi_img' src={list.img} alt='' id='img_size_mobile'></img></a>
             </div> 
           )}
          <a href='./hindi'>
            <AiOutlineArrowRight className='arrowright'/></a>
          </container>

{/* kannada */}


          <h1 className='kannada_word'>Kannada</h1>
           <container className='kannada_only'>
           {Kannada.map((list) => 
            <div className='kannada_list'>  
            <a href={list.movie}>
             <img className='kannada_img' src={list.img} alt='' id='img_size_mobile'></img></a>
             </div> 
           )}
          <a href='./kannada'>
            <AiOutlineArrowRight className='arrowright'/></a>
          </container>

     </div>
  
  )
}

export default Homemovies