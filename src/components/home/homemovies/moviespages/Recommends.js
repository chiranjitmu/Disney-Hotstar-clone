import React from 'react'
import './Recommends.css'
import One from '../../../../json/recommendlist/recommendone.json'
import Two from '../../../../json/recommendlist/recommendtwo.json'
import Three from '../../../../json/recommendlist/recommendthree.json'


function Recommends() {
  return (
    <div className='recommend'>
      <h1 className='Recommend_word'>Recommended For You</h1>

      {/* first row */}
        <container className='recommend_only'>
         {One.map((list) => 
            <div className='movie_list'>  
                <a href={list.movie}>
                 <img className='img' src={list.img} alt='' id='img_size_mobile'></img></a>
            </div>
            )}
            </container>

      {/* second row */}
        <container className='recommend_only'>
         {Two.map((list) => 
            <div className='movie_list'>  
                <a href={list.movie}>
                 <img className='img' src={list.img} alt='' id='img_size_mobile'></img></a>
            </div>
            )}
            </container>
    
    
        {/* three row */}
        <container className='recommend_only'>
         {Three.map((list) => 
            <div className='movie_list'>  
                <a href={list.movie}>
                 <img className='img' src={list.img} alt='' id='img_size_mobile'></img></a>
            </div>
            )}
            </container>
    
    
    
    
    
     </div> 
  )
}

export default Recommends