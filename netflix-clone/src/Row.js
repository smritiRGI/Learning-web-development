import React , {useState, useEffect} from 'react';
import axios from './axios';

const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function Row({title , fetchURL }) {
    const [movies, setMovies] = useState([]);

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
            <h1>{title}</h1>
            <div className="row_posters">

                {movies.map(movie => {
                    <img src={ `${IMAGE_URL}${movie.poster_path}` } alt={movie.original_title} />
                })}

            </div>
        </div>
    )
}

export default Row;
