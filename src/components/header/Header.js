import React from 'react'
import './Header.css'
import { AiFillHome, AiOutlineSearch, AiOutlinePlus, AiFillStar } from 'react-icons/ai'
import { RiMovie2Fill, RiGitRepositoryPrivateLine } from 'react-icons/ri'

function Header() {
  return (
     <div className='main_header'>
    <div className='header'>
                 
     <img src="Disneyplus.webp" alt=""></img>
     <span className='hotstar_logo_name'>hotstar</span>
     <span className='subscribe_button'>SUBSCRIBE</span>


          <div className='header__home'>
                 <AiFillHome className='home_icon'/>
                 <a href='/'>
                 <button className='header_buttons'>HOME</button></a>
          </div>   

           <div className='header__search'>
                 <a href='/searchmovies' className='search_icon'>
                 <AiOutlineSearch /></a>
                 <a href='/searchmovies'>
                 <button className='header_buttons'>SEARCH</button></a>
          </div>   
          
          <div className='header__watchlist'>
                 <AiOutlinePlus className='watchlist_icon'/>
                 <a href='/'>
                 <button className='header_buttons'>WATCHLIST</button></a>
          </div>      

          <div className='header__originals'>
               <AiFillStar className='originals_icon'/>
               <a href='/'>
               <button className='header_buttons'>ORIGINALS</button></a>
          </div>

          <div className='header__movies'>
               <RiMovie2Fill className='movies_icon'/>
               <a href='/allmovies'>
               <button className='header_buttons'>MOVIES</button></a>
          </div>

          <div className='header__series'>
               <RiGitRepositoryPrivateLine className='series_icon'/>
               <a href='/'>
               <button className='header_buttons'>SERIES</button></a>
          </div>
          <div className='header__user'>
               <img src='images.jpg' alt=''className='user_img'></img>
               <span className='user_name'>DARKSOUL</span>
          </div>  

           </div>
         
   </div>
  )
}

export default Header