import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/women">Women</Link>
            </li>
            <li>
                <Link to="/men">Men</Link>
            </li>
            <li>
                <Link to="/kids">Kids</Link>
            </li>
        </ul>
    </nav>
);

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default NavBar;