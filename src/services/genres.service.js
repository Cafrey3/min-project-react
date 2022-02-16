import {instance} from './axios.service';

class GenresService {
    async getGenres() {
        const {data} = await instance.get('/genre/movie/list')
        return data
    }
}

export const genresService = new GenresService();

