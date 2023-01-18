import {useEffect, useState}  from "react";
import { connect } from 'react-redux';
import {
  getCurrenciesSelectedIndex,
} from './selectors';





const PriceFormat = ({prices, currencieSelectedIndex}) => {

    const [currencyIndex, setcurrencyIndex] = useState(currencieSelectedIndex);
    useEffect(() => {
        setcurrencyIndex(currencieSelectedIndex);
        
      }, [currencieSelectedIndex]);
    
   


    return(
        <>
            <label className="productPrice" >
                <span className="labelName">
                    Price:
                </span>
                <input type="hidden" value={prices[currencyIndex].amount} name="price" />
                <div className="price">
                    {prices[currencyIndex].currency.symbol}{prices[currencyIndex].amount}
                </div>           
            </label>
          
        </>
    );


    }
   




const mapStateToProps = state => ({
   
    currencieSelectedIndex: getCurrenciesSelectedIndex(state),
   
});


export default connect(mapStateToProps)( PriceFormat);