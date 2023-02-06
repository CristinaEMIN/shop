import {useState, useCallback} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCart, getCartQuntity } from '../components/selectors';
import {ReactComponent as EmptyCart} from '../EmptyCart.svg';
import CartPage from '../pages/CartPage';
import Overlay from './Overlay';






const Cart = ({cartQuntity}) => {
   
    const [isOpen, setIsOpen] = useState(false);

    const toggleClose = useCallback(() => {
        console.log("trfaflaf")
      setIsOpen(false);
      console.log(isOpen)
    });

    const toggleOpen = () => {
        setIsOpen(true);
      };
  

    return(
        
            <NavLink to={`/cart`} className="label" >
        
                {(cartQuntity > 0) ? 
                    <>
                        <div onMouseOver={toggleOpen}>
                            <EmptyCart  />
                            <div className='CartNumberItems'>{cartQuntity}</div>
                        </div>
                            <Overlay isOpen={isOpen} >
                                <CartPage toggleOverlay={toggleClose}/>
                            </Overlay>
                        
                        
                           
                        
                    </> :
                    <EmptyCart />
                    }
            </NavLink>
       
    );
}


const mapStateToProps = state => ({
    cartQuntity: getCartQuntity(state)
   
});


export default connect(mapStateToProps)(Cart);

