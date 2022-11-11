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