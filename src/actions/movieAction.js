import { db } from '../firebase/firebase-config'
import { loadMovies } from '../helpers/loadHelp';
import { types } from "../types/types";

export const AddMovie = (tittle, description, year, categorie, image, duration) => {
    return async (dispatch) => {

        const newMovie = {
            image,
            tittle,
            description,
            year,
            categorie,
            duration,
            qualification: [],
            trailer: ''
        }

        console.log(newMovie);

        await db.collection('movies/').add(newMovie)
        dispatch(addNewMovie(newMovie))
        dispatch(startLoadingMovie('movies'))
    }
}

export const addNewMovie = (movie) => ({
    type: types.addMovie,
    payload: {
        ...movie
    }
})

export const startLoadingMovie = (id) => {
    return async (dispatch) => {
        const movie = await loadMovies(id)
        dispatch(setMovie(movie))
    }
}

export const setMovie = (movie) => ({
    type: types.loadMovie,
    payload: movie
})

export const activeMovies = (id, movie) => ({
    type: types.activeMovie,
    payload: {
        id,
        ...movie
    }
})