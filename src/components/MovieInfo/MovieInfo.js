import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './MovieInfo.css';
import {moviesService} from "../../services/movies.service";

const MovieInfo = () => {
    const {id} = useParams();
    const [film, setFilm] = useState([]);
    const getMovieDetails = async () => {
        const data = await moviesService.getMovieDetailsById(id);
        setFilm(data)
    };
    useEffect(() => {
        getMovieDetails()
    }, []);


    return (
        <div className={'movie_details'}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.original_title}/>
            </div>
            <div className={'movie_info'}>
                <h1>{film.original_title}</h1>
                <p><b>Tagline: </b>{film.tagline}</p>
                <p><b>Genres:</b>{film.genres?.map(el => <span key={el.id}> {el.name}</span>)}</p>
                <p><b>Reelase date: </b>{film.release_date}</p>
                <p><b>Budget: </b>{film.budget}$</p>
                <p><b>Revenue: </b>{film.revenue}$</p>
                <p>{film.overview}</p>
                <p><b>Rating: </b>{film.vote_average} (total votes: {film.vote_count})</p>
                <div className={'company'}>
                    <p><b>Production companies: </b>{film.production_companies?.map(el=> <span key={el.id}> {el.name}</span>)}</p>
                    <span className={'images'}> {film.production_companies?.map(el=> <img key={el.id} src={`https://image.tmdb.org/t/p/w200/${el.logo_path}`} alt=""/>)}</span>
                </div>
                <p><b>Production countries: </b> {film.production_countries?.map(el => <span key={el.id}> {el.name}</span>)}</p>
                <p><b>Runtime: </b>{film.runtime} minutes</p>
                <p><b>Status: </b>{film.status}</p>
            </div>
        </div>
    );
};

export default MovieInfo;
