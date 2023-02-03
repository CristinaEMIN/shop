import React from "react";
import ProductGalleryCart from './ProductGalleryCart';
import ProductForm from "./ProductForm";




const ProductDescriptionCart = ({product, item }) => {

 

    return(
        <>
            <ProductForm product={product} item={item} />
            <ProductGalleryCart gallery={product.gallery} />
            
        </>
    );


    }
   


export default ProductDescriptionCart ;