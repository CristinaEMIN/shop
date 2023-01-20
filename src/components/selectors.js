export const getCart = state => state.cart.data;
export const getCartLoading = state => state.cart.isLoading;
export const getCartQuntity = state => state.cart.data.reduce((accumulator, object) => {
                                            return accumulator + object.quantity;
                                         }, 0);

export const getCurrencies = state => state.currencies.data;
export const getCurrenciesLoading = state => state.currencies.isLoading;
export const getCurrenciesSelectedIndex = state => state.currencies.selected;