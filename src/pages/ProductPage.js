import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useApolloClient, useQuery, gql } from "@apollo/client";
import ProductDescription from "../components/ProductDescription";


const ProductDescriptionWrapper = styled.nav`
    position: absolute;
    width: 1002px;
    height: 595px;
    left: 100px;
    top: 160px;
`;

const PRODUCT_QUERY = gql`
query PRODUCT_QUERY($id: String!){
  product(id: $id){
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
`;

const PRODUCT_FRAGMENT = gql`
fragment CurrentProduct on Product{
  
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

`;


const ProductPage = () => {

    let params = useParams();
    const productId = params.productId;



// const { data, loading, error } = useQuery(PRODUCT_QUERY, { 
//     variables: {
//         id: productId
//         }
//     });


// if (loading) return "Loading...";
// if (error) return <pre>{error.message}</pre>

const client = useApolloClient();
const product = client.readFragment({
    id: `Product:`+productId,
    fragment: PRODUCT_FRAGMENT,  
    
    });
if (product == 'null') {
    const { data, loading, error } = useQuery(PRODUCT_QUERY, { 
    variables: {
        id: productId
        }
    });

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    if (data) product =data.product; 
}
    console.log(product)



    return(
        <ProductDescriptionWrapper>
             <ProductDescription product={product} /> 
        </ProductDescriptionWrapper>
        
    );


    }
   


export default ProductPage ;