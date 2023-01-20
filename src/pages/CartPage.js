import React from 'react';
import { connect } from 'react-redux';
import { getCart } from '../components/selectors';
import { addNewItemToCart } from '../components/thunks';






const CartPage = ({cart, addToCart}) => {
   


    return(
        <>
        <h1>CART</h1>
        <div className="grid-container">
            {console.log(cart)}
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

