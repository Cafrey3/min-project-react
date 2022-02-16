import React from 'react';

import './MoviesListCard.css';
import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {id, original_title, poster_path, overview, release_date, vote_average, vote_count, movieGenresList} = movie
    return (
        <>
            <Link to={`movie/${id.toString()}`} className={'movie_card'}>
                <div className={'poster'}>
                    <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
                </div>
                <div className={'info'}>
                    <h2>{original_title}</h2>
                    <h3>{movieGenresList.map(({name, id}) => <span key={id}>{name} </span>)}</h3>
                    <p>{overview}</p>
                    <p><b>Release date:</b> {release_date}</p>
                    <p><b>Rating: </b>{vote_average} (total votes: {vote_count})</p>
                </div>
            </Link>
        </>
    );
};

export default MoviesListCard;
