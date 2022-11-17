import React from "react";
import styled from "styled-components";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import ProductFormFields from "./ProductFormFields";

const Button = styled.input`
    /* _Button / Elements / Common */
    /* Auto layout */
    align-items: center;
    padding: 16px 32px;
    width: 292px;
    height: 52px;
    background: #5ECE7B;
    border: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;

`;


const ProductForm = ({product}) => {

    const htmlFrom = (htmlString) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
          { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }


    return(
        <>
        <div className="productDetails"> 
            <form className="productDetailsForm">
                <ProductFormFields product={product} />
                <Button type="submit" value="Add to cart" />
            </form>
            <div className="productDescription">{htmlFrom(product.description)}</div>
        </div>
            

        </>
    );


    }
   


export default ProductForm ;