import { useEffect, useState } from "react";
import Movieslist from "./Movieslist.jsx";

const Home = () => {

    let [movies , setMovies] = useState(null);

    if(localStorage.getItem("fav")==null){
        localStorage.setItem("fav", "[]")
    }

    useEffect(()=>{
        setTimeout(()=>{
              fetch("http://localhost:4000/movies")
              .then((res)=>{ return res.json() })
              .then((data)=>{ 
              console.log(data);
              setMovies(data);
            })
        } , 3000)   
    } , [])

    return ( 
        <div className="home">   

        {movies==null  && <h1 id="load">Loading <i id="loaing" class='bx bx-loader-circle bx-spin' ></i></h1>}

        {movies && 
        <Movieslist movies={movies} title= "All movies"/>}

        {movies && 
        <Movieslist movies={movies.filter((m)=>{return m.gerner.includes("Action")})} title="Action movies"/>}

        {movies && 
        <Movieslist movies={movies.filter((m)=>{return m.gerner.includes("Romance")})} title="Romantic movies"/>} 

        {movies && 
        <Movieslist movies={movies.filter((m)=>{return m.rating>=8.3})} title="Top rated movies"/>}

        </div>
     );
}
export default Home;