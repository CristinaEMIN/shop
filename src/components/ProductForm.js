import {useCallback, useReducer} from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import ProductFormFields from "./ProductFormFields";
import { getCart } from "./selectors";
import { addNewItemToCart } from "./thunks";
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




const ProductForm = ({product, cart, addToCart}) => {

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

    const handleAddtoCart = e => {
        e.preventDefault();
        console.log(cart.length)
        var increaseQuntity = false;
        if(cart.length >0){
            cart.map(item => {
               var itemInCart = compareObjectExeceptKey(item, attributesOfSelectedProduct, 'quantity')
                if(itemInCart) {
                    item.quantity +=1;
                    increaseQuntity = true 
                } 
            }) 
            console.log(increaseQuntity)
            if(!increaseQuntity) {
                addToCart(attributesOfSelectedProduct);
               
            }
        
        } else {
            
            addToCart(attributesOfSelectedProduct)
          
        }
        
        
        // console.log(increaseQuntity);
        // if(increaseQuntity == false){
        //     addToCart(attributesOfSelectedProduct)
        // } else {
        //     console.log(cart.findIndex(item => item.id == product.id))
        //     cart[cart.findIndex(item => item.id == product.id)].quantity += 1;
        // }
       
        
        /* clear state */
        dispatch({ type: "reset" });
      };
  
      console.log(cart)
    const handleInputChange = useCallback(

        (e) => {
            const { name, value } = e.target;
            dispatch({ type: name, value });
        },
        []
      );

      

     
    return(
        <>
        <div className="productDetails"> 
            <form className="productDetailsForm" onSubmit={handleAddtoCart} >
                <ProductFormFields product={product} handleInputChange={handleInputChange}/>
                <Button type="submit" value="Add to cart" />
            </form>
            <div className="productDescription">{htmlFrom(product.description)}</div>
        </div>
            

        </>
    );


    }
   
    const mapStateToProps = state => ({
        cart: getCart(state)
       
    });
    
    const mapDispatchToProps = dispatch => ({
      addToCart: item => dispatch(addNewItemToCart(item)),
      
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

