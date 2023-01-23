import {useCallback, useReducer, useState} from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import ProductFormFields from "./ProductFormFields";
import { getCart, getCartQuntity } from "./selectors";
import { addNewItemToCart, updateItem } from "./thunks";
import { compareObjectExeceptKey } from "./functions";

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




const ProductForm = ({product, cart, addToCart, cartQuntity, updateSelectedItem}) => {

    const htmlFrom = (htmlString) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
          { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }

    const initialState = {
        ["id"]:product.id,
        ["quantity"]: 1
    };

    const reducer = (state, action) => {
        if (action.type === "reset") {
            return initialState;
        }
    
        const result = { ...state };
        result[action.type] = action.value;
        return result;
    };

    const [attributesOfSelectedProduct, dispatch] = useReducer(reducer, initialState);

    // const includesObject = (array = [], object = {}) => {
    //     const filteredArray = array.filter(
    //       (element) => JSON.stringify(element) === JSON.stringify(object)
    //     );
    //     return filteredArray.length > 0 ? true : false;
    //   };

    var resetInputs = false;

    const handleAddtoCart = e => {
        e.preventDefault();
       

        //reset all selected inputs
        e.target.reset();
       

        //determine if a product is already in cart
        var increaseQuntity = false;
        if(cart.length >0){
            cart.map(item => {
                //compare attributes against all for the product
                const exceptKeys = ['cartId','quantity']
               var itemInCart = compareObjectExeceptKey(item, attributesOfSelectedProduct, exceptKeys)
              
               if(itemInCart) {
                    item.quantity +=1;
                    increaseQuntity = true ;
                    updateSelectedItem(item)
                } 
            }) 
            
            if(!increaseQuntity) {
                addToCart(attributesOfSelectedProduct);
               
            }
        
        } else {
            
            addToCart(attributesOfSelectedProduct)
          
        }
        console.log(cartQuntity)
        /* clear state */
        dispatch({ type: "reset" });
      };
  
      console.log(cart)
    const handleInputChange = useCallback(

        (e) => {
           
            const { name, value  } = e.target;
            dispatch({ type: name, value });
            
        },
        []
      );

     


    

      

     
    return(
        <>
        <div className="productDetails #container"> 
            <form className="productDetailsForm" onSubmit={handleAddtoCart} >
                <ProductFormFields product={product} handleInputChange={handleInputChange} />
                <Button  className="buttonAddToCart" type="submit" value="Add to cart" />
            </form>
            <div className="productDescription">{htmlFrom(product.description)}</div>
        </div>
            

        </>
    );


    }
   
    const mapStateToProps = state => ({
        cart: getCart(state),
        cartQuntity: getCartQuntity(state)
       
    });
    
    const mapDispatchToProps = dispatch => ({
      addToCart: item => dispatch(addNewItemToCart(item)),
      updateSelectedItem: item => dispatch(updateItem(item)),
      
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

