import React from 'react'
import PropTypes from 'prop-types'

import './movie.scss'

export default function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__column">
                <h4 className="movie__title">{title}</h4>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return <li key={index + '_' + genre} className="genres__genre">{genre}</li>
                    })}
                </ul>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0, 160)}...</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}