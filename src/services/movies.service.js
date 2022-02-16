import {instance} from './axios.service';

class MoviesService {
    async getMovies() {
        const {data} = await instance.get('/discover/movie')
        return data
    }

    async getMovieDetailsById(movieId) {
        const {data} = await instance.get(`/movie/${movieId}`)
        return data
    }
}

export const moviesService = new MoviesService();

