import React from "react";
import { connect } from 'react-redux';
import { getCart } from '../components/selectors';
import { addNewItemToCart } from '../components/thunks';
import CartItem from "../components/CartItem";


const CartPage = ({cart, addToCart}) => {
   
  
    return(
        <>
        <h1 className="cartTitle">Cart</h1>
        <div className="cart-grid-container">
            { cart.map( item =>   (
                    <CartItem productId={item.id} />
            )) }
               
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

