import React from "react";
import ProductGalleryCart from './ProductGalleryCart';
import ProductForm from "./ProductForm";




const ProductDescriptionCart = ({product, attributesSelected }) => {

 

    return(
        <>
            <ProductForm product={product} attributesSelected={attributesSelected} />
            <ProductGalleryCart gallery={product.gallery} />
            
        </>
    );


    }
   


export default ProductDescriptionCart ;