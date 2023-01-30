import {useState } from "react";
import { connect } from 'react-redux';
import { getCart, getCartQuntity, getCartTotal, getCurrencies, getCurrenciesSelectedIndex} from '../components/selectors';
import { addNewItemToCart } from '../components/thunks';
import CartItem from "../components/CartItem";


const CartPage = ({cart, cartQuntity, cartTotalPrice, currencies, currencieSelectedIndex}) => {
   
    



  
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

              <div className="cartOrderArea">
                <div className="cartSummary">
                    <div className="cartSummaryItem" ><span className="cartSummaryItemName cartTax">Tax 21%: </span>
                                            <span className="cartSummaryValue">{currencies.currencies[currencieSelectedIndex].symbol}{ cartTotalPrice/100 *21}</span> 
                            </div>
                    <div className="cartSummaryItem"> <span className=" cartSummaryItemName cartQuantity">Quantity: </span>
                                    <span className="cartSummaryValue">{cartQuntity}
                                        </span></div>
                    <div className="cartSummaryItem"><span className=" cartSummaryItemName cartTotal">Total: </span>
                    <span className="cartSummaryValue">{currencies.currencies[currencieSelectedIndex].symbol}{ cartTotalPrice}
                        </span></div>
                </div>
                <button className="placeOrderButton">Order</button>
            </div> 
          
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

