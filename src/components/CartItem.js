import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useApolloClient, useQuery, gql } from "@apollo/client";
import ProductDescriptionCart from "../components/ProductDescriptionCart";

const ProductCartWrapper = styled.nav`
    position: relative;
    display: block;
    border-top: 1px solid #E5E5E5;
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



const CartItem = ({productId}) => {
   
    const [fetchedProducts, setFetchedProducts] = useState(false);
    const client = useApolloClient();
               
    let product = client.readFragment({
        id: `Product:`+productId,
        fragment: PRODUCT_FRAGMENT,  
        
        });
        useEffect (() => {
            if(product) setFetchedProducts(true);
        },[product])

    console.log(fetchedProducts)

    const { data, loading, error } = useQuery(PRODUCT_QUERY, { 
    variables: {
        id: productId
        }
    },
    {enabled: !fetchedProducts}
    );
    if(!fetchedProducts){
            if (loading) return "Loading...";
            if (error) return <pre>{error.message}</pre>
            if (data) product =data.product; 
    }

    return(
        <ProductCartWrapper>
            <ProductDescriptionCart product={product} /> 
        </ProductCartWrapper>
        
    )
        
        
    
    
}




export default CartItem;

