import { types } from "../types/types";

const initialState = {
    movie: [],
    active: {}
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addMovie:
            return {
                ...state,
                movie: [action.payload, ...state.movie]
            }
        case types.loadMovie:
            return {}
        case types.updateMovie:
            return {}
        default:
            return state
    }
}