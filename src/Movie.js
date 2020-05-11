import React from "react";
import PropType from "prop-types";
import "./App.css";

function Movie({id, title, summary, poster, year, genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">    
            <h3 className="movie_tile">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">{genres.map((genres, index)=> (
                <li className="genres_genres" key={index}>{genres}</li>
            ))}
            </ul>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
}
Movie.PropType = {
    id : PropType.number.isRequired,
    title : PropType.string.isRequired,
    summary : PropType.string.isRequired,
    poster : PropType.string.isRequired,
    year : PropType.number.isRequired,
    genres : PropType.arrayOf(PropType.string).isRequired
}

export default Movie;