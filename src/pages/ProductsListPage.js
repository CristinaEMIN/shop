import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ProductsList from '../components/ProductsList';


// const PRODUCTS_QUERY = gql`
// query PRODUCTS_QUERY($title: String!){
//   category(input: {title: $title }){
//     products{
//         id
//         name
//         category
//         gallery
//         prices{  
//             amount
//             currency{
//             label
//             symbol
//                 }
//             }   
//         }
      
//     }
// }
// `;

const PRODUCTS_QUERY = gql`
query PRODUCTS_QUERY($title: String!){
  category(input: {title: $title }){
    products{
        id
        name
        category
        inStock
        description
        attributes{
            name
            type
            items{
            displayValue
            value
            }
        }
        brand
        gallery
        prices{  
            amount
            currency{
            label
            symbol
                }
        }   
    }
  }
}
`;



const ProductsListPage = () => {
    let params = useParams();
    const categoryname = params.categoryname;



const { data, loading, error } = useQuery(PRODUCTS_QUERY, { 
    variables: {
        title: categoryname    
        },
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
    });



if (loading) return "Loading...";
if (error) return <pre>{error.message}</pre>

    return(
        <>
        <h1 className='productCategoryName'>{categoryname}</h1>
        <div className="grid-container">
            <ProductsList products={data.category.products}/>
        </div>
        
        </>
    );
}


export default ProductsListPage;