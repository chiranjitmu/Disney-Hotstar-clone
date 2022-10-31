import React from 'react'
import './Header.css'
import { AiFillHome, AiOutlineSearch, AiOutlinePlus, AiFillStar } from 'react-icons/ai'
import { RiMovie2Fill, RiGitRepositoryPrivateLine } from 'react-icons/ri'

function Header() {
  return (
     <div className='main_header'>
    <div className='header'>
                 
     <img src="Disneyplus.webp" alt=""></img>

          <div className='header__home'>
                 <AiFillHome />
                 <a href='/'>
                 <button>HOME</button></a>
          </div>   

           <div className='header__search'>
                 <AiOutlineSearch />
                 <a href='/searchmovies'>
                 <button>SEARCH</button></a>
          </div>      

          <div className='header__watchlist'>
                 <AiOutlinePlus />
                 <a href='/'>
                 <button>WATCHLIST</button></a>
          </div>      

          <div className='header__originals'>
               <AiFillStar />
               <a href='/'>
               <button>ORIGINALS</button></a>
          </div>

          <div className='header__movies'>
               <RiMovie2Fill />
               <a href='/allmovies'>
               <button>MOVIES</button></a>
          </div>

          <div className='header__series'>
               <RiGitRepositoryPrivateLine />
               <a href='/'>
               <button>SERIES</button></a>
          </div>
             
          <div className='header__user'>
               <img src='images.jpg' alt=''></img>
               <span>DARKSOUL</span>
          </div>  

           </div>
   </div>
  )
}

export default Header