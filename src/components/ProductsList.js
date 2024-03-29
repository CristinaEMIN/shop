import React from "react";
import { Link } from "react-router-dom";
import PriceFormat from "./PriceFormat";

const ProductsList = ({ products }) => (
    <>
  
    {products.map((product , key) => {
      
    
    
    return(
        <Link className='product-list-item productCard' key= {key} to={`/${product.category}/${product.id}`}>
            
                <img className="productCardImg" src={product.gallery[0]} />
                <h3 className="productName">{product.name}</h3>
                {/* <p className="productPrice">{product.prices[0].currency.symbol}{product.prices[0].amount}</p> */}
                <PriceFormat  prices={product.prices}/>
            
        </Link>
      )
    }
      )}
  </>
)

export default ProductsList
