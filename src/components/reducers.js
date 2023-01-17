import {
    LOAD_CATEGORIES_IN_PROGRESS,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_FAILURE,
    LOAD_CURRENCIES_IN_PROGRESS,
    LOAD_CURRENCIES_SUCCESS,
    LOAD_CURRENCIES_FAILURE,
    SET_CURRENCIES_SELECTED
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

const initialStateCurrencies = { isLoading: false, data: [], selected: [] };

export const currencies= (state = initialStateCurrencies, action) => {
    const { type, payload } = action;

    switch (type) {
    case LOAD_CURRENCIES_SUCCESS: {
        const { currencies } = payload;
        return {
            ...state,
            isLoading: true,
            selected: 0,
            data: currencies,
        };
    }
    case LOAD_CURRENCIES_IN_PROGRESS:
        return {
            ...state,
            isLoading: false,
        }
    case LOAD_CURRENCIES_FAILURE:
        return {
            ...state,
            isLoading: false,
        }
    case SET_CURRENCIES_SELECTED: {
        const { index } = payload;
        return {
            ...state,
            selected: index,
        };
    }
    default:
        return state;
    }
}