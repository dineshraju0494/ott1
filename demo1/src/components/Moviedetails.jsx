import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import Relevantmovies from "./Relaventmovies";
import { useNavigate } from "react-router-dom";

const Moviedetails = () => {

    let {id} = useParams();
    let navigate = useNavigate();
    let [movie , setMovie] = useState(null);
    let [error, setError] = useState(null);
    let [pending, setPending] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/" + id)
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovie(data);
                setPending(false);
            })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            }) 
        } , 3000)   
    } , [id])
  
    let deleteMovie =()=>{
        fetch("http://localhost:4000/movies/" + id, {method : "DELETE"})
        .then(()=> {navigate("/")});
        alert("Movie had been Deleted");
    }

    return (
        <div>
            
            {pending == true && <h1>Loading <i id="loaing" class='bx bx-loader-circle bx-spin' ></i></h1>}
            {error && <h1>{error}</h1>}

            {movie && <div className="movie-details">
            <h1>Movie Details</h1>
                <img src={movie.poster} alt=""/>
                <h1 id="mo">Movie Name : {movie.moviename}</h1>
                <h2>Lead : {movie.hero}</h2>
                <h2>Director : {movie.director}</h2>
                <h2>Gerner : {movie.gerner}</h2>
                <h2>Languages : {movie.languages.join(" , ")}</h2>
                <h2>Release Year : {movie.release}</h2>
                <h2>Rating : IMDb {movie.rating}</h2>
                <h1>Story Line: </h1>
                <p>{movie.synopsis}</p>
                <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <button onClick={deleteMovie}>Delete</button>
            </div>}
            {movie && <Relevantmovies gerner ={movie.gerner}/>}
        </div>
      );
}
 
export default Moviedetails;