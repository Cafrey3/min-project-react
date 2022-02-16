import './App.css';

import './App.css';
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import {Route, Routes} from "react-router-dom";

// Components:
// - PosterPreview (movie image)
// - StarsRating

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MoviesList/>}/>
                <Route path={'movie/:id'} element={<MovieInfo/>}/>
            </Routes>
        </>
    );
};

export default App;