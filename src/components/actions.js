export const LOAD_CART_IN_PROGRESS = 'LOAD_CART_IN_PROGRESS';
export const loadCartInProgress = () => ({
    type: LOAD_CART_IN_PROGRESS,
});

export const LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS';
export const loadCartSuccess = cart => ({
    type: LOAD_CART_SUCCESS,
    payload: { cart },
});

export const LOAD_CART_FAILURE = 'LOAD_CART_FAILURE';
export const loadCartFailure = () => ({
    type: LOAD_CART_FAILURE,
});

export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = item => ({
    type: ADD_TO_CART,
    payload: { item },
});

export const LOAD_CURRENCIES_IN_PROGRESS = 'LOAD_CURRENCIES_IN_PROGRESS';
export const loadCurrenciesInProgress = () => ({
    type: LOAD_CURRENCIES_IN_PROGRESS,
});

export const LOAD_CURRENCIES_SUCCESS= 'LOAD_CURRENCIES_SUCCESS';
export const loadCurrenciesSuccess = currencies => ({
    type: LOAD_CURRENCIES_SUCCESS,
    payload: { currencies },
});

export const LOAD_CURRENCIES_FAILURE = 'LOAD_CURRENCIES_FAILURE';
export const loadCurrenciesFailure = () => ({
    type: LOAD_CURRENCIES_FAILURE,
});

export const SET_CURRENCIES_SELECTED= 'SET_CURRENCIES_SELECTED';
export const setCurrenciesSelected = index => ({
    type: SET_CURRENCIES_SELECTED,
    payload: { index },
});
