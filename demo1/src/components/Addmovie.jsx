import { useRef } from "react";
import {useNavigate} from 'react-router-dom'

const Addmovie = () => {

    let navigate = useNavigate()

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let gerner = useRef();
    let poster = useRef();
    let trailer = useRef();
    let release = useRef();
    let rating = useRef();
    let synopsis = useRef();


    let handleAddNewMovie = (e)=>{
        e.preventDefault()
        // create new movie object
        let newMovie = {
            moviename : moviename.current.value,
            hero : hero.current.value,
            heroine : heroine.current.value,
            director : director.current.value,
            languages:[],
            gerner:  gerner.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: release.current.value,
            rating: rating.current.value,
            synopsis: synopsis.current.value
        }
        let options = document.getElementsByName("lang");
        for(let i = 0; i < options.length; i++) 
        {
            if(options[i].checked==true)
            {
                newMovie.languages.push( options[i].value )
            }  
        }

        // send the movie obj to the database
        fetch("http://localhost:4000/movies" , 
                                                {
                                                    method : "POST",
                                                    headers : {"Content-Type": "application/json"},
                                                    body : JSON.stringify(newMovie)
                                                })
        .then(()=>{
            alert("New movie added to database");
            navigate("/");
        })
    }

    return ( 
        <div className="add-movie">
            <h1>Add new Movie</h1>

            <form onSubmit={ handleAddNewMovie }>
                <input type="text" placeholder="Enter the movie name" ref={moviename} />
                <input type="text" placeholder="Enter the lead name" ref={hero} />
                <input type="text" placeholder="Enter the heroine name" ref={heroine} />
                <input type="text" placeholder="Enter the director name" ref={director}/>
                <fieldset>
                    <legend>Select languages</legend>
                    <input type="checkbox" name="lang" value="kannada"/><label>Tamil</label>
                    <input type="checkbox" name="lang" value="tamil"/><label>English</label>
                    <input type="checkbox" name="lang" value="telugu"/><label>Kanada</label>
                    <input type="checkbox" name="lang" value="hindi"/><label>hindi</label>
                </fieldset>
                <input type="text" placeholder="Enter the gerner" ref={gerner} />
                <input type="url" placeholder="Enter the poster url" ref={poster} />
                <input type="url" placeholder="Enter the trailer url" ref={trailer}/>
                <input type="number" placeholder="Enter the release year" min="1950" max="2024" ref={release} />
                <input type="number" placeholder="Enter the rating" min="1" max="10" step="0.1" ref={rating} />
                <textarea cols="70" rows="6" placeholder="Synopsis" ref={synopsis}></textarea>

                <input type="submit" value="Add movie"/>
            </form>
        </div>
     );
}
 
export default Addmovie;