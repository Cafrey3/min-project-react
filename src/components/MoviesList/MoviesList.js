import React, {useEffect, useState} from 'react';

import './MoviesList.css';
import {moviesService} from "../../services/movies.service";
import {genresService} from "../../services/genres.service";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);


    const fetchMovies = async () => {
        const {results} = await moviesService.getMovies()

        return results
    }

    const fetchGenres = async () => {
        const {genres} = await genresService.getGenres()

        return genres
    }

    const fetchMoviesData = async () => {
        const request = [fetchMovies(), fetchGenres()];
        const [movies, genres] = await Promise.all(request)
        const mergedWithGenresMovies = movies.map(movie => {
            const {genre_ids} = movie;
            const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))

            return {...movie, movieGenresList}
        })

        setMovies(mergedWithGenresMovies)
    }

    useEffect(() => {
        fetchMoviesData()
    }, []);


    return (
        <div className={'movie_card__list'}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesList;