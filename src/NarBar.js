import React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES_QUERY = gql`
{
  categories{
      name
      }   
}
`;

const NavBar = () => {
  
    const { data, loading, error } = useQuery(CATEGORIES_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    
    return(
   <Navigation> 
    <ul className="navigation">
        {/* <li>
            <NavLink to="/women" activeClassName="active" className="label"><p className="label-text">Women</p></NavLink>
        </li>
        <li>
            <NavLink to="/men" activeClassName="active" className="label"><p className="label-text">Men</p></NavLink>
        </li>
        <li>
            <NavLink to="/kids" activeClassName="active" className="label"><p className="label-text">Kids</p></NavLink>
        </li> */}

        {data.categories.map((category) => (
          <li key={category.id}>
             <NavLink to={`/${category.name}`} activeClassName="active" className="label"><p className="label-text">{category.name}</p></NavLink>
            </li>
        ))}

    </ul>
        
    </Navigation>

);
}


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