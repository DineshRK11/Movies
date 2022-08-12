
import Movies from './Movies.js';
import useFetch from './useFetch.js';
const Home = () => {
  let {data : movies,pending,err}=useFetch("http://localhost:4000/movies");
   
    return (
        
        <div>
            {pending && <div className='loader'></div>}
            {pending && <h1>Loading....!!!!</h1>}
        {movies && <Movies movies={movies} title="All Movies"/>}
        {err && <h1>{err}</h1>}
        </div>
       
     );
}
export default Home;     