import React, { useState } from 'react'
import './Search.css'
import { BiSearch } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import Recommended from '../home/homemovies/Homemovies'
import Searched from '../../json/searched/searched.json'

function Search() {
  
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(false);


  const setToggel = () =>
  {
    setModal(!modal)
  }

  const searched = (e) =>
   {
    setQuery(e.target.value)
   }

  const clear = () =>
  {
    setModal(false)
    setQuery("")
  }



  return (

    <div className='searching'>    
      <div className='search__menu'>
        <input placeholder="search movies.." type="text" value={query} onChange={searched}/>
         <ImCross className='searchcancle' id='cancle_search_mobile'  onClick={clear}/>
          <BiSearch className='searchicon' onClick={setToggel} />
          </div>

          {modal && query &&
          <ul className='searched_item'>
            {Searched.filter((search) =>
            search.first_name.toLowerCase().includes(query.toLowerCase())
            )
     
           


            .map((list) => 
            <div>  
            <a href={list.movie} className='searched_list'>
             <img className='searched_img' src={list.img} alt=''  id='img_searched_mobile'></img></a>
             </div> 
           ) } 
          
          </ul>
          }
         
   
      <Recommended />
    </div>
  )
}

export default Search