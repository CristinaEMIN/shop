import React from "react";
import AttributesSelector from "./AttributesSelector";



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

           
            <label className="productPrice" >
                    <span className="labelName">
                                Price:
                                </span>
                <input type="hidden" value={product.prices[0].amount} name="price"/>
                {product.prices[0].currency.symbol}{product.prices[0].amount}
            </label>
    
           
            
        
            

        </>
    );


    }
   


export default ProductFormFields ;