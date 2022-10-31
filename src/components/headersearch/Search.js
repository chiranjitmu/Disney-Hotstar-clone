import React from 'react'
import './Search.css'
import { BiSearch } from 'react-icons/bi'
import Recommended from '../home/homemovies/Homemovies'

function Search() {
  return (
    <div className='searching'>    
      <div className='search__menu'>
          <input placeholder="search movies.." type="text"/>
          <BiSearch className='searchicon' />
      </div>
      <Recommended />
    </div>
  )
}

export default Search