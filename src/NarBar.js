import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import {ReactComponent as ShopLogo} from './VSF.svg';
import {ReactComponent as CurrencySelector} from './CurrencySVG.svg';

const NavBar = () => (
   <Navigation> 
    <ul className="navigation">
        <li>
            <NavLink to="/women" activeClassName="active" className="label"><p className="label-text">Women</p></NavLink>
        </li>
        <li>
            <NavLink to="/men" activeClassName="active" className="label"><p className="label-text">Men</p></NavLink>
        </li>
        <li>
            <NavLink to="/kids" activeClassName="active" className="label"><p className="label-text">Kids</p></NavLink>
        </li>
    </ul>
        
    </Navigation>

);


const Navigation = styled.nav`
    /* Navigation */
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    position: absolute;
    width: 234px;
    height: 56px;
    left: 101px;
    bottom: 0px;
`;

export default NavBar;