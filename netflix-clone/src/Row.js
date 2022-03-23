import React , {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';

const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function Row({title , fetchURL ,isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl , setTrailer]  = useState([]);

    useEffect(() => {
        // if []  , run only once when the page loads
        // if variable like [movies], it runs once the page loads and evertime the movies changes.
        async function fetchData(){
        // await - wait for the request to respond back.
        const request = axios.get(fetchURL);
        setMovies((await request).data.results);
        //console.log((await request).data.results);
        }

        fetchData();
    }, [fetchURL])

    return (
        <div className='row'>
            <h2 className="title">{title}</h2>
            <div className="row_posters">

                {movies.map(movie => {
                     return <img key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`}  
                     src={ `${IMAGE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}` } 
                     alt={movie.original_title}/>
                    
                })}

            </div>

        </div>

    )

}

export default Row;
