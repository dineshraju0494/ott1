import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Relevantmovies = ({gerner}) => {

    let [movies , setMovies] = useState(null);

    useEffect(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return res.json() })
            .then((data)=>{setMovies(data)})   
    } , [])
    console.log(gerner.split(" "));
    return (
        <div className="relevent-movies">
            <h1>{gerner.split(" ")}</h1>
          {movies && <Movieslist movies ={movies.filter((m)=>{return m.gerner.includes(gerner)})} title ="Relevant Movies"/>};
        </div>
      );
}
 
export default Relevantmovies;