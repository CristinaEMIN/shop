import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import CurrencyCodePicker from "./components/CurrencyCodePicker";
import Cart from "./components/Cart";

const ActionsBar = () => (
   <Actions>
            <ul className="actions">
                <li>
                </li>
                <li>
                </li>
                <li className="currencySelector">
                    <CurrencyCodePicker />
                </li>
                <li>
                    <Cart />
                </li>
            </ul>
    </Actions>

);


const Actions= styled.nav`
    /* Actions */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 22px;
    position: absolute;
    width: 204px;
    height: 40px;
    right: 101px;
    top: 23px;
`;

export default ActionsBar;