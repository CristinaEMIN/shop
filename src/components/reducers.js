import {
    LOAD_CATEGORIES_IN_PROGRESS,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: [] };

export const categories = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case LOAD_CATEGORIES_SUCCESS: {
        const { categories } = payload;
        return {
            ...state,
            isLoading: false,
            data: categories,
        };
    }
    case LOAD_CATEGORIES_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        }
    case LOAD_CATEGORIES_FAILURE:
        return {
            ...state,
            isLoading: false,
        }
    default:
        return state;
    }
}