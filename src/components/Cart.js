import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCart, getCartQuntity } from '../components/selectors';
import {ReactComponent as EmptyCart} from '../EmptyCart.svg';






const Cart = ({cart, cartQuntity}) => {
   
    return(
        
            <NavLink to={`/cart`} className="label">
        
                {(cartQuntity > 0) ? 
                    <>
                        <EmptyCart />
                        <div className='CartNumberItems'>{cartQuntity}</div>
                    </> :
                    <EmptyCart />
                    }
            </NavLink>
       
    );
}


const mapStateToProps = state => ({
    cart: getCart(state),
    cartQuntity: getCartQuntity(state)
   
});


export default connect(mapStateToProps)(Cart);

