import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import Movieslist from "./Movieslist";

const Search = () => {

    let {searchword} = useParams();
    let [movies , setMovies] = useState(null);  
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    
    useEffect(()=>{
        setMovies(null);
        setPending(true);
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                let d = data.filter((m)=>{
                    return (m.moviename.toLowerCase().startsWith(searchword.toLowerCase())) ||
                           (m.gerner.toLowerCase()===searchword.toLowerCase()) || 
                           (m.languages.includes(searchword))
                })
                setMovies(d);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 3000)
    } , [searchword])

    return ( 
        <div className="search-cont">

        {pending==true && <h1>Loading... <i id="loaing" class='bx bx-loader-circle bx-spin' ></i></h1> }

        {movies && <Movieslist movies={movies}  title="Search result"/>}

        </div>
     );
}
export default Search;