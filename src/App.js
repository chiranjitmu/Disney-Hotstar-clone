import './App.css';
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
  HashRouter as Router,
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


function App() {
  return (
    <div className="App">
      <Router basename="/Disney-hotstar-clone">
        <Header />
        <Routes>
        <Route path='/movies/Radheshyam' element={<Radheshyam/>}/>
        <Route path='/movies/James' element={<James/>}/>
        <Route path='/movies/Kantara' element={<Kantara/>}/>
        <Route path='/movies/Eightthree' element={<Eightthree/>}/>
        <Route path='/movies/bachchhanpaandey' element={<Bachchhanpaandey/>}/>
        <Route path='/movies/Pushpa' element={<Pushpa/>}/>
        <Route path='/movies/Runway34' element={<Runway34/>}/>
        <Route path='/movies/KGF2' element={<Kgf2/>}/>
        <Route path='/movies/RRR' element={<RRR/>}/>
        <Route path='/movies/Beast' element={<Beast/>}/>
        <Route path='/movies/Bhoolbhulaiyaa2' element={<Bhoolbhulaiyaa2/>}/>





          <Route path='/' element={<Home/>}/>
          <Route path='/ALLMOVIES' element={<Movies/>}/>
          <Route path='/SEARCHMOVIES' element={<Search/>}/>
          <Route path='/Recommends' element={<Recommends/>}/>
          <Route path='/Hindi' element={<Hindimovie/>}/>
          <Route path='/Kannada' element={<Kannadamovie/>}/> 
          <Route path='/movies/Hindi' element={<Hindimovie/>}/> 
          <Route path='/movies/Kannada' element={<Kannadamovie/>}/> 
        </Routes>
       </Router>
    </div>
  );
}

export default App;
