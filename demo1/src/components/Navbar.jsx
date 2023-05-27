import {  useState } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  let [searchword, setSearchword]=useState("")
  
    return (  
      <nav>
        <div id="logo">
           <Link to="/"><h1>Movie Buff</h1></Link>
            <i id="lo" class='bx bx-camera-movie bx-flashing' ></i>
        </div>
        <div id="search">
            <input type="search" placeholder="search for movies" value={searchword}
            onChange={(e)=>{setSearchword(e.target.value)}} />
        <Link to ={`/search/${searchword}`}><button >serach</button></Link>
            
        </div>
        {/* <button id="log">Login</button> */}
         <div id="fav-movie">
         <Link to="/fav">Favroutie Movies</Link>
         </div>
        <div id="add-movie">
            <Link to="/add">Add Movie</Link>
            <i id="sig" class='bx bxs-user-circle bx-tada' ></i>
            <h2>Sign-up</h2>
        </div>
      </nav>
    );
}
 
export default Navbar;