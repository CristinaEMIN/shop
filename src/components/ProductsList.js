import React from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ products }) => (
    <>
  
    {products.map((product , key) => {
       console.log(product)
    
    
    return(
        <Link className='product-list-item productCard' key= {key} to={`/${product.category}/${product.name}`}>
            
                <img className="productCardImg" src={product.gallery[0]} />
                <h3 className="productName">{product.name}</h3>
                <p className="productPrice">{product.prices[0].currency.symbol}{product.prices[0].amount}</p>
            
        </Link>
      )
    }
      )}
  </>
)

export default ProductsList
