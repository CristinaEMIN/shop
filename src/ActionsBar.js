import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {ReactComponent as CurrencySelector} from './CurrencySVG.svg';
import {ReactComponent as EmptyCart} from './EmptyCart.svg';

const ActionsBar = () => (
   <Actions>
            <ul className="actions">
                <li>
                </li>
                <li>
                </li>
                <li>
                    <CurrencySelector />
                </li>
                <li>
                    <EmptyCart />
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