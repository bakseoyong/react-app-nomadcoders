import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index)=> <MovieGerne genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis text ={synopsis}
                    maxLine='3'
                    ellipsis=' ...'
                    trimRight
                    basedOn='letters'/>
                </div>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="poster" className="Movie__Poster"></img>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

function MovieGerne({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGerne.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;