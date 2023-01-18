import {
    LOAD_CART_IN_PROGRESS,
    LOAD_CART_SUCCESS,
    LOAD_CART_FAILURE,
    ADD_TO_CART,
    LOAD_CURRENCIES_IN_PROGRESS,
    LOAD_CURRENCIES_SUCCESS,
    LOAD_CURRENCIES_FAILURE,
    SET_CURRENCIES_SELECTED
} from './actions';

const initialState = { isLoading: false, data: [] };

export const cart = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case LOAD_CART_SUCCESS: {
        const { cart } = payload;
        return {
            ...state,
            isLoading: false,
            data: cart,
        };
    }
    case LOAD_CART_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        }
    case LOAD_CART_FAILURE:
        return {
            ...state,
            isLoading: false,
        }
    case ADD_TO_CART: {
        const { item } = payload;
        return {
            ...state,
            isLoading: false,
            data:  state.data.concat(item),
        };
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