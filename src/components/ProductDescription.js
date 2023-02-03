import React from "react";
import ProductGallery from '../components/ProductGallery';
import ProductForm from "./ProductForm";




const ProductDescription = ({product}) => {

 

    return(
        <>
            <ProductGallery gallery={product.gallery} />
            <ProductForm product={product} item={[]} />
        </>
    );


    }
   


export default ProductDescription ;