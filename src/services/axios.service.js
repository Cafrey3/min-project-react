import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDMxOGUxOTk3MTc1NDZkMzE3Z' +
            'jU5NDNiMDg1MDhjMiIsInN1YiI6IjYyMGE1ODNiZjQ4YjM0MDExZGMzZGM3ZSIsInNjb3BlcyI6WyJhcG' +
            'lfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y0TniyRDI4K0iMyiKN78RfxmTpxmDVkfEOBsrxW_PMQ'
    }
});

export {instance}