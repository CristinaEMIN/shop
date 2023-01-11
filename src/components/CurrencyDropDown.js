import React, { useState } from "react";
import Dropdown from "./DropDown";
import { useQuery, gql } from "@apollo/client";
import {ReactComponent as CurrencySelector} from '../CurrencySVG.svg';

const CURRENCY_QUERY = gql`
{
  currencies{
      label, 
    	symbol
      }   
}
`;


const CuurencyDropDown = () => {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
    setOpen(!open);
    };

    const { data, loading, error } = useQuery(CURRENCY_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

 
  
    
    var menu = [];
    data.currencies.map((currencie,index) => {
        menu[index]= currencie.symbol + ' ' + currencie.label;

    })
  
    return (
      <Dropdown
        open={open}
        trigger={<button onClick={handleOpen}><CurrencySelector /></button>}
        menu={ menu}
        nameofClass = "currencyDropDown"
      />
    );
  };

  export default CuurencyDropDown;
  
 