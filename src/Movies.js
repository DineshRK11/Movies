import { Link } from "react-router-dom";

const Movies = (props) => {
  var movies=props.movies;
var title=props.title;


       return (
           <div className="home-content">
              
                   <h1>{title}</h1>
                  {
                   movies.map((movie)=>(
                           <div className="movie-list">
                                <Link to={`/movie-detail${movie.id}`}>
                                   <h1>{movie.mName}</h1>
                                   <h2>{movie.hero}</h2>
                                   <h2>{movie.genere}</h2>
                         </Link>
                           </div>
                   ))
                  }
                   </div>
        );
   }
   export default Movies;