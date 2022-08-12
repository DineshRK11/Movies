import { useState } from 'react';
// const Home = () => {
//     // var rating=10;
//   var[rating, setRating] = useState(10);
//     const changerating=()=>{
//         setRating(9);
//         console.log(rating);
//     }
//     return (
//         <div className="home-content">
// <h1> Movie 1</h1>
// <h2>hero</h2>
// <h2>rating {rating}</h2>
// <button onClick={changerating}>change the rating</button>
//         </div>
//      );
// }
const HomeA = () => {
 var[movies,setMovies] = useState( [{
        mName:"Captain America: The First Avenger",
        cast:"Chris Evas, Tommy Lee jones, Hugo Weaving, Hayley Atwell",
        director: "Joe Johnston",
        desc:"The film was directed by Joe Johnston, written by Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside Tommy Lee Jones, Hugo Weaving, Hayley Atwell, Sebastian Stan, Dominic Cooper, Neal McDonough, Derek Luke, and Stanley Tucci. During World War II, Steve Rogers, a frail man, is transformed into the super-soldier Captain America and must stop the Red Skull (Weaving) from using the Tesseract as an energy source for world domination.",id:1
        },
        {
        mName:"Captain Marvel",
        cast:"Brie Larson, Samuel Jackson, Jude Law, Gemma Chan",
        director: " Anna Boden, Ryan Fleck",
        desc:"Captain Marvel is a 2019 American superhero film based on Marvel Comics featuring the character Carol Danvers / Captain Marvel. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 21st film in the Marvel Cinematic Universe (MCU).",id:2},
        {
        mName:"Iron Man",
        cast:"Robert Downey Jr,Gwyneth Paltrow,Jon Favreau,Stan Lee",
        director: "Jon Favreau",
        desc:"When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",id:3
        },
        {
        mName:"Iron Man 2",
        cast:"Robert Downey Jr,Gwyneth Paltrow,Jon Favreau,Scarlett Johansson",
        director: "Jon Favreau",
        desc:"Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",id:4
        },
        {
        mName:"The Incredible Hulk",
        cast:"Edward Norton, Lou Ferrigo, William Hurt",
        director: "Louis Leterrier",
        desc:"Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature, the Hulk, whenever he experiences negative emotions such as anger.",id:5
        },
        {
        mName:"Thor",
        cast:"Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",
        director: "Kenneth Branagh",
        desc:"Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.",id:6
        },
        {
        mName:"Avengers",
        cast:"Chris Evas, Robert Downey Jr, Scralett Johansson, Jeremy Renner",
        director: "Joss Whedon",
        desc:"Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",id:7
        }
    ]);
    return(
        <div className="home-content">
                <h1>All Movies</h1>
                {
                  movies.map((movie)=>(
                        <div className="movie-list">
                                <h1>Movie :{movie.mName}</h1>
                                <h2>Director :{movie.director}</h2>
                                <h2>cast :{movie.cast}</h2>
                        </div>
                  ))
                }
        </div>
    )
        }
//     return (
//         <div className="home-content">
//                 <h1>All movies....</h1>
//                {
//                 movies.map((movie)=>(
//                         <div className="movie-list">
//                                 <h1>{movie.mName}</h1>
//                                 <h2>{movie.hero}</h2>
//                                 <h2>{movie.genere}</h2>
//                         </div>
//                 ))
//                }
//                 </div>
//      );
// }
export default HomeA;