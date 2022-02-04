import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'
import { Col } from 'react-bootstrap'

const base_url = "https://image.tmdb.org/t/p/original/";



function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request


        }
        fetchData();

    }, [fetchUrl])

    console.log(movies);

    return (
        <div className="container">

            <h2 className="title">{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                    <Col lg={3}>
                        <img
                            className="row_poster"
                            src={`${base_url}${movie.backdrop_path}`}
                            alt={movie.name} />
                    </Col>




                ))}
            </div>
        </div>

    )
}

export default Row;

