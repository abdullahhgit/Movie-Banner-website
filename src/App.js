import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=98f8371a';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // console.log(movies);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        //  console.log(response);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('jurassic world');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search movies here"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { searchMovies(searchTerm) }}
                />
            </div>
            {
                movies.length > 0 ?
                    <div className="container">
                        {
                            movies.map((movie) => <MovieCard movie={movie} />)
                        }
                    </div>
                    :
                    <div className="container">
                        <h2>No Movies Found</h2>
                    </div>

            }
        </div>
    );
}

// 98f8371a

export default App; 