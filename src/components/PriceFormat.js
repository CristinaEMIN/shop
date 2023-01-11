import React from "react";



const PriceFormat = ({currencyIndex, prices}) => {

   


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
   


export default PriceFormat  ;