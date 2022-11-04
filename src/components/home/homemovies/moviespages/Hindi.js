import React from 'react'
import './Hindi.css'
import One from '../../../../json/hindilist/hindione.json'
import Two from '../../../../json/hindilist/hinditwo.json'


function Hindimovie() {
  return (
    <div className='hindis'>
      <h1 className='hindis_word'>Hindi</h1>

      {/* first row */}
        <container className='hindis_only'>
         {One.map((list) => 
            <div className='hindis_list'>  
                <a href={list.movie}>
                 <img className='hindis_img' src={list.img} alt='' id='img_size_mobile'></img></a>
            </div>
            )}
            </container>

      {/* second row */}
        <container className='hindis_only'>
         {Two.map((list) => 
            <div className='hindis_list'>  
                <a href={list.movie}>
                 <img className='hindis_img' src={list.img} alt='' id='img_size_mobile'></img></a>
            </div>
            )}
            </container>
    
    
    
    
    
    
    
     </div> 
  )
}

export default Hindimovie