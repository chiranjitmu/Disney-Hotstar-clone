import './App.css';
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Header from './components/header/Header';
import Home from './components/headerhome/Home';
import Search from './components/headersearch/Search';
import Movies from './components/headermovie/Movies';
// movies container
import Recommends from './components/home/homemovies/moviespages/Recommends';
import Hindimovie from './components/home/homemovies/moviespages/Hindi';
import Kannadamovie from './components/home/homemovies/moviespages/Kannada';

import Radheshyam from './movies/Radheshyam'
import James from './movies/James';
import Kantara from './movies/Kantara';
import Eightthree from './movies/Eightthree';
import Bachchhanpaandey from './movies/Bachchhanpaandey';
import Pushpa from './movies/Pushpa';
import Runway34 from './movies/Runway34';
import Kgf2 from './movies/Kgf2';
import RRR from './movies/Rrr';
import Beast from './movies/Beast';
import Bhoolbhulaiyaa2 from './movies/Bhoolbhulaiyaa2';
import {
  BrowserRouter,
  Route,
  Routes
}from 'react-router-dom'









// IF YOU LIKE TO  PUT MORE MOVIES THEN MAKE CHANGES IN

// (/movies) add that movie
//  ( APP JS ) make route for that to work on the href 
// (json) add in homejson and also in lang list and recommendlist
//  ( components/home/homemovies/homemovies.js )
// ( components/headermovies/MOVIES JS )
// ( recommends   jsonfile  and also add to specific lang )
// (searched.json also add the movie and name)


function App() {

  const { isAuthenticated } = useAuth0();

  return (
      <div className='App'>
      <BrowserRouter>
        <Header />

        { isAuthenticated ?
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/movies/radheshyam' element={<Radheshyam/>}/>
        <Route path='/movies/james' element={<James/>}/>
        <Route path='/movies/kantara' element={<Kantara/>}/>
        <Route path='/movies/eightthree' element={<Eightthree/>}/>
        <Route path='/movies/bachchhanpaandey' element={<Bachchhanpaandey/>}/>
        <Route path='/movies/pushpa' element={<Pushpa/>}/>
        <Route path='/movies/runway34' element={<Runway34/>}/>
        <Route path='/movies/kgf2' element={<Kgf2/>}/>
        <Route path='/movies/rrr' element={<RRR/>}/>
        <Route path='/movies/beast' element={<Beast/>}/>
        <Route path='/movies/bhoolbhulaiyaa2' element={<Bhoolbhulaiyaa2/>}/>
          <Route path='/allmovies' element={<Movies/>}/>
          <Route path='/searchmovies' element={<Search/>}/>
          <Route path='/recommends' element={<Recommends/>}/>
          <Route path='/hindi' element={<Hindimovie/>}/>
          <Route path='/kannada' element={<Kannadamovie/>}/> 
          <Route path='/movies/hindi' element={<Hindimovie/>}/> 
          <Route path='/movies/kannada' element={<Kannadamovie/>}/> 
        </Routes>
        :
        <div className='not_logged' id='not_logged_mobile'>
          Please Subscribe..
          </div>
        }
       </BrowserRouter>
    </div>
  )
}

export default App;
