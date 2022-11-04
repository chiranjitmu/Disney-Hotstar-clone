import React from 'react'
import './Header.css'
import { AiFillHome, AiOutlineSearch, AiOutlinePlus, AiFillStar } from 'react-icons/ai'
import { RiMovie2Fill, RiGitRepositoryPrivateLine } from 'react-icons/ri'

function Header() {
  return (
     <div className='main_header'>
    <div className='header'>

            
     <a href='/'> <img src="Disneyplus.webp" alt=""></img></a> 
     <span className='hotstar_logo_name'><a href='/' className='hotstar_logo_tag'>hotstar</a></span>
     <span className='subscribe_button'>SUBSCRIBE</span>


          <div className='header__home'>
                 <a href='/' className='home_icon'>
                 <AiFillHome /></a>
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
                 <a href='/' className='watchlist_icon'>
                 <AiOutlinePlus /></a>
                 <a href='/'>
                 <button className='header_buttons'>WATCHLIST</button></a>
          </div>      

          <div className='header__originals'>
               <a href='/' className='originals_icon'>
               <AiFillStar /></a>
               <a href='/'>
               <button className='header_buttons'>ORIGINALS</button></a>
          </div>

          <div className='header__movies'>
               <a href='/allmovies' className='movies_icon'>
               <RiMovie2Fill /></a>
               <a href='/allmovies'>
               <button className='header_buttons'>MOVIES</button></a>
          </div>

          <div className='header__series'>
               <a href='/' className='series_icon'>
               <RiGitRepositoryPrivateLine /></a>
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