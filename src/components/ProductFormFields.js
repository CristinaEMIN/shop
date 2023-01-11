import React from "react";
import AttributesSelector from "./AttributesSelector";
import PriceFormat from "./PriceFormat";



const ProductFormFields = ({product}) => {

   


    return(
        <>
        
            <input type="hidden" value={product.id} name={product.id}/>
            <label className="productBrand">
                <input type="hidden" value={product.brand} name={product.brand}/>
                    {product.brand}
            </label>
            <label className="productName">
                <input type="hidden" value={product.name} name={product.name}/>
                    {product.name}
            </label>
    
        
            <AttributesSelector attributes={product.attributes} />

           
            <PriceFormat currencyIndex={0} prices={product.prices}/>
    
           
            
        
            

        </>
    );


    }
   


export default ProductFormFields ;