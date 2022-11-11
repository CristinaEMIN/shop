import React from "react";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import styled from "styled-components";
import ProductGallery from '../components/ProductGallery';
import ProductForm from "./ProductForm";




const ProductDescription = ({product}) => {

    const htmlFrom = (htmlString) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
          { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }

    return(
        <>
        <ProductGallery gallery={product.gallery} />
        <div className="productDetails"> 
            <h1 className="productBrand">{product.brand}</h1>
            <h2 className="productName">{product.name}</h2>
           <ProductForm product={product} />
            <div className="productDescription">{htmlFrom(product.description)}</div>
        </div>
       
        
        </>
    );


    }
   


export default ProductDescription ;