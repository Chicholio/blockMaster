import { db } from "../firebase/firebase-config";

export const loadMovies = async (id) => {

    const moviesSnap = await db.collection(`${id}`).get()
    const movies = []

    moviesSnap.forEach(snapHijo => {
        movies.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return movies
}