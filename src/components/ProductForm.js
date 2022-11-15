import React from "react";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import styled from "styled-components";

const Button = styled.input`
    /* _Button / Elements / Common */
    /* Auto layout */
    align-items: center;
    padding: 16px 32px;
    width: 292px;
    height: 52px;
    background: #5ECE7B;
    border: none;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;

`;


const ProductForm = ({product}) => {


    return(
        <>
        
            <form className="productDetailsForm">
            {product.attributes.map((attribute) => {
                switch(attribute.name) {
                    case 'Size':
                        return (
                            <label >
                                <span className="labelName"> 
                                {attribute.name}:
                                </span>
                            
                                        <div className="attributesValues">
                                        {attribute.items.map((item) => (
                                            <label className="labelSize">
                                                <input type="radio" value={item.displayValue} name="size"/>
                                                <span className="checkmark">{item.displayValue}</span>
                                            </label>
                                            
                                            
                                        ))}
                                        </div>
                                   
                                    
                                </label>
                            );
                            break;
                    case 'Color':
                        return (
                            <label>
                                <span className="labelName">
                                {attribute.name}:
                                </span>
                               
                                <div className="attributesValues">
                                    {attribute.items.map((item) => (
                                        <label className="labelColor">
                                            <input type="radio" value={item.displayValue} name="color"/>
                                            <span className="checkmark">{item.displayValue}</span>
                                        </label>
                                    ))}
                                    
                                </div>
                                
                            </label>
                        );
                        break;
                    case 'Capacity':
                            return (
                                <label>
                                    <span className="labelName">
                                    {attribute.name}:
                                    </span>
                                    
                                    <select >
                                        {attribute.items.map((item) => (
                                            <option value={item.displayValue}>{item.displayValue}</option>
                                        ))}
                                        
                                    </select>
                                    
                                </label>
                            );
                            break;
                    default:
                        return(
                            <label>
                                <span className="labelName">
                                {attribute.name}:
                                </span>
                           
                                <input type="text" name="name" />
                            </label>)
                }

             
        }
            )}
                <Button type="submit" value="Add to cart" />
            </form>
            

        </>
    );


    }
   


export default ProductForm ;