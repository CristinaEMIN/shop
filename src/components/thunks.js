
import { useQuery, gql } from "@apollo/client";
import {
    loadCategoriesInProgress,
    loadCategoriesSuccess,
    loadCategoriesFailure,
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


export const displayAlert = text => () => {
    alert(text);
};