import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const AddMovie = (tittle, description, age, categorie, duration, qualification) => {
    return async (dispatch) => {
        const newMovie = {
            image: '',
            tittle,
            description,
            age,
            categorie,
            duration,
            qualification: [],
            trailer: ''
        }

        await db.collection('movies/').add(newMovie)
        dispatch(addNewMovie(newMovie))
        // dispatch()
    }
}

export const addNewMovie = (movie) => ({
    type: types.addMovie,
    payload: {
        ...movie
    }
})