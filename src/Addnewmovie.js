import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const Addnewmovie = () => {
    const [mName,setmName]=useState("")

    // let mName=useRef()
    const [hero,sethero]=useState("")
    const [genere,setgenere]=useState("")
    const [Poster,setPoster]=useState("")
    const [Trailer,setTrailer]=useState("")

    let history=useHistory()

    let {data:movies}=useFetch("http://localhost:4000/movies")
    const handleSubmit=(e)=>{
       
        e.preventDefault()
        let newMovie={mName,hero,genere,Trailer,Poster}
        fetch("http://localhost:4000/movies",
        {method:"post",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(newMovie)})
        .then(()=>{alert("the data has been added")
        history.push(`/movie-detail${movies[movies.length-1].id+1}`)})
    } 

    return (
        <div className="create-movie">
            <h1 className="add">Add new movie to the list</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Movie Name:</label>
                <input type="text"  placeholder="Enter the movie name" required value={mName} onChange={(e)=>{setmName(e.target.value);console.log(mName);}}/>
                {/* <input type="text"  placeholder="Enter the movie name" ref={mName}/> */}
                <label htmlFor="">Hero Name:</label>
                <input type="text"  placeholder="Enter the hero name" value={hero} onChange={(e)=>{sethero(e.target.value);console.log(hero);}}/>
                <label htmlFor="">Genere :</label>
                <input type="text"  placeholder="Enter the Genere"  value={genere} onChange={(e)=>{setgenere(e.target.value);console.log(hero);}}/>
                <label htmlFor="">Movie poster link:</label>
                <input type="text"  placeholder="paste the poster link" value={Poster} onChange={(e)=>{setPoster(e.target.value);console.log(hero);}}/>
                <label htmlFor="">Movie Trailer link:</label>
                <input type="text"  placeholder="paste the trailer link" value={Trailer} onChange={(e)=>{setTrailer(e.target.value);console.log(hero);}}/>
                <input type="submit" />
            </form>
        </div>
     );
}
export default Addnewmovie;