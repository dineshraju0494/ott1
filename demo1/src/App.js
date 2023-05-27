import Addmovies from "./components/Addmovie";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Moviedetails from "./components/Moviedetails";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Search from "./components/Search";

 function App(){
  
  return(
    <BrowserRouter>
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/add" element = {<Addmovies/>}/>
        <Route path="/fav" element = {<Favorites/>}/>
        <Route path = "/moviedetails/:id" element = {<Moviedetails/>}/>
        <Route path = "/search/:searchword" element = {<Search/>}/>
      </Routes>
    </div>
    </BrowserRouter>

    );
   }
export default App;