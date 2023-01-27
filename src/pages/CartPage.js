import {useState } from "react";
import { connect } from 'react-redux';
import { getCart, getCartQuntity, getCartTotal} from '../components/selectors';
import { addNewItemToCart } from '../components/thunks';
import CartItem from "../components/CartItem";


const CartPage = ({cart, cartQuntity, cartTotalPrice, addToCart}) => {
   
    



  
    return(
        <>
        <h1 className="cartTitle">Cart</h1>
        <div className="cart-grid-container">
            { cart.map( item =>   {
                    let exclude = new Set(["id","cartId","quantity"]);
                    let productAttributes = Object.fromEntries(Object.entries(item).filter(e => !exclude.has(e[0])));
                    console.log(productAttributes)
                   return  <CartItem productId={item.id} />
            }) }
               
        </div>
        <div>
            <h3 className="cartTax">Tax 21%: { cartTotalPrice/100 *21}</h3>
            <h3 className="cartQuantity">Qunatity: {cartQuntity}</h3>
            <h3 className="cartTotal">Total:{ cartTotalPrice}</h3>
        </div>
        
        </>
    );
}


const mapStateToProps = state => ({
    cart: getCart(state),
    cartQuntity: getCartQuntity(state),
    cartTotalPrice: getCartTotal(state)
   
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addNewItemToCart(item)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

