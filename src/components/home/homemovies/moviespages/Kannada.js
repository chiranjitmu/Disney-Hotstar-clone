import React from 'react'
import './Kannada.css'
import One from '../../../../json/kannadalist/kannadaone.json'


function Kannadamovie() {
  return (
    <div className='kannadas'>
      <h1 className='kannadas_word'>Kannada</h1>

      {/* first row */}
        <container className='kannadas_only'>
         {One.map((list) => 
            <div className='kannadas_list'>  
                <a href={list.movie}>
                 <img className='kannadas_img' src={list.img} alt='' id='img_size_mobile'></img></a>
            </div>
            )}
            </container>

      {/* second row */}
        
    
     </div> 
  )
}

export default Kannadamovie