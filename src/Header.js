import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import NavBar from './NarBar';
import ActionsBar from "./ActionsBar";
import {ReactComponent as ShopLogo} from './VSF.svg';


const Header = () => (
    <HeaderWrapper> 
        <NavBar />
        <LogoWrapper>
            <ShopLogo />
        </LogoWrapper>
        <ActionsBar />
    </HeaderWrapper>
  

);


const HeaderWrapper = styled.div`
    position: absolute;
    // width: 1440px;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;
`;

const LogoWrapper = styled.div`
    /* a-logo */
    position: absolute;
    width: 41px;
    height: 41px;
    left: 50%;
    top: calc(50% - 41px/2 + 4.5px);
`;


export default Header;