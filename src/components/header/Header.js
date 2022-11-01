import React from 'react'
import './Header.css'
import { AiFillHome, AiOutlineSearch, AiOutlinePlus, AiFillStar } from 'react-icons/ai'
import { RiMovie2Fill, RiGitRepositoryPrivateLine } from 'react-icons/ri'

function Header() {
  return (
     <div className='main_header'>
    <div className='header'>
                 
     <img src="Disneyplus.webp" alt=""></img>

     <div className='header_list'>

          <div className='header__home'>
                 <AiFillHome />
                 <a href='/'>
                 <button className='header_buttons'>HOME</button></a>
          </div>   

           <div className='header__search'>
                 <AiOutlineSearch />
                 <a href='/searchmovies'>
                 <button className='header_buttons'>SEARCH</button></a>
          </div>      

          <div className='header__watchlist'>
                 <AiOutlinePlus />
                 <a href='/'>
                 <button className='header_buttons'>WATCHLIST</button></a>
          </div>      

          <div className='header__originals'>
               <AiFillStar />
               <a href='/'>
               <button className='header_buttons'>ORIGINALS</button></a>
          </div>

          <div className='header__movies'>
               <RiMovie2Fill />
               <a href='/allmovies'>
               <button className='header_buttons'>MOVIES</button></a>
          </div>

          <div className='header__series'>
               <RiGitRepositoryPrivateLine />
               <a href='/'>
               <button className='header_buttons'>SERIES</button></a>
          </div>

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