import {
    loadCartInProgress,
    loadCartSuccess,
    loadCartFailure,
    addToCart,
    loadCurrenciesInProgress,
    loadCurrenciesSuccess,
    loadCurrenciesFailure,
    setCurrenciesSelected
} from './actions';



export const loadCart= () => async dispatch => {
    try {
        dispatch(loadCartInProgress());
        
          
    
        // dispatch(loadCartSuccess(cart));
    } catch (e) {
        dispatch(loadCartFailure());
        dispatch(displayAlert(e));
    }
}

export const addNewItemToCart = item => async dispatch => {
    try {
        dispatch(addToCart(item));
    
    } catch (e) {
        dispatch(loadCartFailure());
        dispatch(displayAlert(e));
    }
}



export const loadCurrencies = () => async dispatch => {
    
    try {
        dispatch(loadCurrenciesInProgress());
           const response = await fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
                  query {
                        currencies{
                            label, 
                              symbol
                            }   
                      }
                `,
            }),
          })
          const data= await response.json();
          const currencies = data.data;
          
          
        dispatch(setCurrenciesSelected(0));
        dispatch(loadCurrenciesSuccess(currencies));
    } catch (e) {
        dispatch(loadCurrenciesFailure());
        dispatch(displayAlert(e));
    }
}

export const selectCurrencyIndex = index => async dispatch => {
   
    try {
        dispatch(setCurrenciesSelected(index));
          
    } catch (e) {
        dispatch(loadCurrenciesFailure());
        dispatch(displayAlert(e));
    }
}


export const displayAlert = text => () => {
    alert(text);
};