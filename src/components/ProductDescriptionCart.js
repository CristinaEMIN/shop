import React from "react";
import ProductGalleryCart from './ProductGalleryCart';
import ProductForm from "./ProductForm";




const ProductDescriptionCart = ({product}) => {

 

    return(
        <>
            <ProductForm product={product} />
            <ProductGalleryCart gallery={product.gallery} />
            
        </>
    );


    }
   


export default ProductDescriptionCart ;