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
            return {
                ...state,
                movie: [...action.payload]
            }
        case types.activeMovie:
            return {
                ...state,
                active: {...action.payload}
            }
        case types.updateMovie:
            return {}
        default:
            return state
    }
}