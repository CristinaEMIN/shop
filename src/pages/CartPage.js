import {useState } from "react";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCart, getCartQuntity, getCartTotal, getCurrencies, getCurrenciesSelectedIndex} from '../components/selectors';
import { addNewItemToCart } from '../components/thunks';
import CartItem from "../components/CartItem";


const CartPage = ({cart, cartQuntity, cartTotalPrice, currencies, currencieSelectedIndex, toggleOverlay}) => {
   
    



  
    return(
        <>
        <div className="cartPage" onMouseLeave={toggleOverlay}>

            <h1 className="cartTitle">Cart</h1>
            <h1 className="cartInfo"><span>My bag</span>, {cartQuntity} items</h1>
            { cartQuntity ? <div className="cart-grid-container">
                { cart.map( item =>   {
                        // let exclude = new Set(["id","cartId","quantity"]);
                        // let productAttributes = Object.fromEntries(Object.entries(item).filter(e => !exclude.has(e[0])));
                        // console.log(productAttributes)
                    return  <CartItem item={item} />
                }) }

                <div className="cartOrderArea">
                    <div className="cartSummary">
                        <div className="cartSummaryItem cartTax" ><span className="cartSummaryItemName ">Tax 21%: </span>
                                                <span className="cartSummaryValue">{currencies.currencies[currencieSelectedIndex].symbol}{ ( cartTotalPrice/100 *21).toFixed(2)}</span> 
                                </div>
                        <div className="cartSummaryItem cartQuantity"> <span className=" cartSummaryItemName">Quantity: </span>
                                        <span className="cartSummaryValue">{cartQuntity}
                                            </span></div>
                        <div className="cartSummaryItem"><span className=" cartSummaryItemName cartTotal">Total: </span>
                        <span className="cartSummaryValue">{currencies.currencies[currencieSelectedIndex].symbol}{ cartTotalPrice.toFixed(2)}
                            </span></div>
                    </div>
                    <div className="cartButtons">
                        <NavLink to={`/cart`} className="label" >
                            <button className="viewBagButton">View bag</button>
                        </NavLink>
                        <button className="placeOrderButton"><span>Order</span></button> 
                    </div>
                   
                </div> 
            
            </div> : <></>}
        
        </div>
        </>
    );
}


const mapStateToProps = state => ({
    cart: getCart(state),
    cartQuntity: getCartQuntity(state),
    cartTotalPrice: getCartTotal(state),
    currencies: getCurrencies(state),
    currencieSelectedIndex: getCurrenciesSelectedIndex(state),
   
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addNewItemToCart(item)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

