import { useEffect, useCallback, useState, Suspense } from "react";
import { connect } from 'react-redux';
// import { useQuery, gql } from "@apollo/client";
import {
  getCurrencies,
  getCurrenciesLoading,
  getCurrenciesSelectedIndex,
} from './selectors';
import {
  loadCurrencies,
  selectCurrencyIndex,
} from './thunks';

// const CURRENCY_QUERY = gql`
// {
//   currencies{
//       label, 
//     	symbol
//       }   
// }
// `;


const CurencyCodePicked = ({currencies, isLoading, currencieSelectedIndex, startLoadingCurrencies, selectNewCurrency }) => {
  
  useEffect(() => {
    startLoadingCurrencies();
  }, []);
  // const [currencyCode, setCurrencyCode] = useState();

const loadingMessage = <div>Loading currencie...</div>;

const handleCurrencyCode = useCallback(
    
  (e) => {
    selectNewCurrency(e.target.value)
  },
  []
);
    return !isLoading ? loadingMessage :
      
          <select className="currencyCode"  onChange={handleCurrencyCode}>
                           
                            { currencies.currencies.map((currencie,index) => (
                            <option key={index} value={index}>
                               {currencie.symbol} &nbsp;&nbsp;&nbsp; { currencie.label}
                                  
                            </option>
                            ))}
                        </select>
           
  };


  const mapStateToProps = state => ({
    isLoading: getCurrenciesLoading(state),
    currencies: getCurrencies(state),
    currencieSelectedIndex: getCurrenciesSelectedIndex(state),
   
});

const mapDispatchToProps = dispatch => ({
  startLoadingCurrencies: () => dispatch(loadCurrencies()),
  selectNewCurrency: index => dispatch(selectCurrencyIndex(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurencyCodePicked);

  
 