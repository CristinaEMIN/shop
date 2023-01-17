export const LOAD_CATEGORIES_IN_PROGRESS = 'LOAD_CATEGORIES_IN_PROGRESS';
export const loadCategoriesInProgress = () => ({
    type: LOAD_CATEGORIES_IN_PROGRESS,
});

export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const loadCategoriesSuccess = categories => ({
    type: LOAD_CATEGORIES_SUCCESS,
    payload: { categories },
});

export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';
export const loadCategoriesFailure = () => ({
    type: LOAD_CATEGORIES_FAILURE,
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
