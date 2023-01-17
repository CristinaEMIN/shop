import { useState, useCallback } from "react";
// import { useQuery, gql } from "@apollo/client";
import {ReactComponent as CurrencySelector} from '../CurrencySVG.svg';
import CurrencyCodePicker from "./CurrencyCodePicker";


// const CURRENCY_QUERY = gql`
// {
//   currencies{
//       label, 
//     	symbol
//       }   
// }
// `;


const CurencyDropDown = () => {
 
  
    const content = (
            
               <CurrencyCodePicker />
          
    )

    
   

    
   
    return content;
           
  };






export default CurencyDropDown;

  
 