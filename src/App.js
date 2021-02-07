import React, { Component } from 'react'
import './App.scss';
// import {BrowserRouter, Router, Switch} from 'react-router-dom'
// import PropTypes from "prop-types"
import axios from 'axios'
import Movie from './components/movie/Movie';

export default class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    this.setState({movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovies()
  }

  renderMovie = (movie) => {
    return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={ movie.genres}/>
  }
  

  render() {
    const {isLoading, movies} = this.state
    return (
      <section className="container">
        {isLoading
          ?
          <div className="loader">
            <span className="loader__text">Загрузка...</span>
          </div>
          : <div className="movies">{movies.map(this.renderMovie)}</div>}
      </section>
    )
  }
}

