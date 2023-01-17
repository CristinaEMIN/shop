
import { useQuery, gql } from "@apollo/client";
import {
    loadCategoriesInProgress,
    loadCategoriesSuccess,
    loadCategoriesFailure,
    loadCurrenciesInProgress,
    loadCurrenciesSuccess,
    loadCurrenciesFailure,
    setCurrenciesSelected
} from './actions';


const CATEGORIES_QUERY = gql`
{
  categories{
      name
      }   
}
`;
export const loadCategories = () => async dispatch => {
    try {
        dispatch(loadCategoriesInProgress());
        const { categories, loading, error } = useQuery(CATEGORIES_QUERY);
        // const response = await fetch('http://localhost:4000', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       query: `
        //           query {
        //             categories{
        //                 name
        //                 }   
        //           }
        //         `,
        //     }),
        //   })
          console.log(categories)
        // const categories= await response.json();
    
        dispatch(loadCategoriesSuccess(categories));
    } catch (e) {
        dispatch(loadCategoriesFailure());
        dispatch(displayAlert(e));
    }
}




// const CURRENCY_QUERY = gql`
// {
//   currencies{
//       label, 
//     	symbol
//       }   
// }
// `;

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
          console.log("initial");
          
        dispatch(setCurrenciesSelected(0));
        dispatch(loadCurrenciesSuccess(currencies));
    } catch (e) {
        dispatch(loadCurrenciesFailure());
        dispatch(displayAlert(e));
    }
}

export const selectCurrencyIndex = index => async dispatch => {
    console.log("load");
    console.log(index);
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