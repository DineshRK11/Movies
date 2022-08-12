import React from "react";
import { useParams,useHistory} from "react-router-dom";
import useFetch from "./useFetch";
const MovieDetail = () => {

    let{id}= useParams()
    let history=useHistory()
    let{data:movie,pending,error}=useFetch(`http://localhost:4000/movies/${id}`)
    const handleDelete=()=>{
        fetch(`http://localhost:4000/movies/${id}`,{method:"DELETE"})
        .then(()=>{
            alert(`this movie has been removed from the list`)
            history.push("/")
        })

    }
    return (
        <div className="movie-detail">
            {error && <h1>{error}</h1>}
            {pending && <h1>Loading....!!!!</h1>}
        {movie && <div>
            <img src={movie.Poster}></img>
            <h1>Movie :{movie.mName}</h1><br />
            <h2>Actor :{movie.hero}</h2><br />
            <h2>Genere :{movie.genere}</h2><br /><br />
            <h2>Story :{movie.story}</h2>
            
              {/* <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}</div>}
             <button onClick={handleDelete}>Delete</button>
            {/* <h1>Complete Details of the Movie {id}</h1> */}
        </div>
      );
}
 
export default MovieDetail;