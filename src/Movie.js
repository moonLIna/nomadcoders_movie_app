import React from "react";
import PropType from "prop-types";

function Movie({id, title, summary, poster, year}){
    return <h4>{title}</h4>
}
Movie.PropType = {
    id : PropType.number.isRequired,
    title : PropType.string.isRequired,
    summary : PropType.string.isRequired,
    poster : PropType.string.isRequired,
    year : PropType.number.isRequired
}

export default Movie;