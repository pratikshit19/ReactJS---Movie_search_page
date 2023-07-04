import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 3bca19fb

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3bca19fb';

const movie1 = {
    
    
        "Title": "Miles Morales Ultimate Spiderman",
        "Year": "2021",
        "imdbID": "tt14311386",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg"
    
   
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
     
   const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
   }



   useEffect(()=>{
        searchMovies('Spiderman');
   },[])


    return (

        //Page title
       <div className="app">
        <h1>MovieFare</h1>
        

        {/*Search Bar */}
        <div className = "search">
            <input 
            placeholder = "Search for movies"
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img
            src = {SearchIcon}
            alt = "Search"
            onClick={()=>searchMovies(searchTerm)}

            />
        </div>

        {
            movies?.length > 0
            ? (
                <div className = "container">

                    {movies.map((movie)=>(<MovieCard movie = {movie}/>))}
                </div>
            )
            : (
                <div className = 'empty'>
                    <h3>No Movies found</h3>
                </div>
            )
        }

        

        
       </div>
    );
}

export default App;