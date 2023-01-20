import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getCart, getCartQuntity } from '../components/selectors';
import {ReactComponent as EmptyCart} from '../EmptyCart.svg';






const Cart = ({cart, cartQuntity}) => {
   
    // let [numberOfItems, updateNumberOfItems] = useState(0);
    // console.log(numberOfItems)
    // useEffect(() => {
    //     let quntityTotal = 0;
    //     if(cart.length >0){
            
    //         quntityTotal = cart.reduce((accumulator, object) => {
    //             return accumulator + object.quantity;
    //           }, 0);
    //     }
    //     console.log(quntityTotal)
    //     updateNumberOfItems(quntityTotal);
      
    // }, [cart]);

    console.log(cartQuntity)

    
// console.log(numberOfItems)
    return(
        (cartQuntity > 0) ? 
            <>
                <EmptyCart />
                <div className='CartNumberItems'>{cartQuntity}</div>
            </> :
            <EmptyCart />
    );
}


const mapStateToProps = state => ({
    cart: getCart(state),
    cartQuntity: getCartQuntity(state)
   
});


export default connect(mapStateToProps)(Cart);

