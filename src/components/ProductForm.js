import {useCallback, useReducer, useState, useEffect} from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import ProductFormFields from "./ProductFormFields";
import { getCart, getCartQuntity } from "./selectors";
import { addNewItemToCart, updateItem } from "./thunks";
import { compareObjects } from "./functions";

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

const ButtonQuantity = styled.button`
    /* _Button / Elements / Common */
    box-sizing: border-box;
    width: 45px;
    height: 45px;
    position: absolute;
    
    background-color: transparent;
    border: 1px solid #1D1F22;
    
    

`;



const Info = styled.div`
    border: 1px solid rgba(36, 241, 6, 0.46);
    background-color: rgba(7, 149, 66, 0.12156862745098039);
    box-shadow: 0px 0px 2px #259c08;
    color: #0ad406;
    transition:0.5s;
    
`;

const Alert = styled(Info)`
    border: 1px solid rgba(241, 142, 6, 0.81);
    background-color: rgba(220, 128, 1, 0.16);
    box-shadow: 0px 0px 2px #ffb103;
    font-size: 18px;
    color: #ffb40b;
`;






const ProductForm = ({product, cart, addToCart, cartQuntity, updateSelectedItem, item}) => {

    const attributesSelected = item.attributes ? item.attributes : {};

    let params = useParams();
    const categoryname = params.categoryname;
    console.log(categoryname)
    

    const htmlFrom = (htmlString) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
          { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }

    //Message after Add to cart
    const [infoMessage, setInfoMessage] = useState('a');

    const renderMessage = (type) => {
        var message = {
            'alert': <Alert>Please select all options</Alert>,
            'success': <Info>Product has been added to card</Info>,
            'default':''
        }
        return message[type];
      };

      //current checked radio attributes
      const reducerState = (stateChecked, action) => ({ ...stateChecked, ...action });
      const [stateChecked, setState] = useReducer(reducerState, []);

    //current product attributes
    const reducer = (state, action) => {
        if (action.type === "reset") {
                return initialState; 
        }
    
        const result = { ...state };
        result["attributes"][action.type] = action.value;
        return result;
    };
    const initialState = {
        ["id"]:product.id,
        ["quantity"]: 1,
        ["prices"]:product.prices,
        ["attributes"]: {}
        
    };
    const [attributesOfSelectedProduct, dispatch] = useReducer(reducer, initialState);


   

    //handle attribute input change  
    const handleInputChange = useCallback(
        (e) => {
            
            const { name, value  } = e.target;
            dispatch({ type: name, value });
        },
        []
      );

    //handle radio button checked
      const handleChange = useCallback(
          (e) => {
            console.log("ce  mai turavura")
              console.log(e)
              const { name, value } = e.target;
              setState({
              ...stateChecked,
              [name]: value,
              });
              if (typeof item.attributes !== "undefined" ) {
                console.log(item)
                item.attributes[name] = value;
                updateSelectedItem(item);
              } 
          },
          []
        );

    // handle add to cart event
    const handleAddtoCart = e => {
        e.preventDefault();
         /* clear state */
        setState(Object.keys(stateChecked).forEach(key => {
            stateChecked[key] = null;
          }));
        //send alert if not all attributes were selected
       if (Object.keys(attributesOfSelectedProduct.attributes).length != product.attributes.length ){
        setInfoMessage("alert");
         /* clear state */
         e.target.reset();
         dispatch({ type: "reset" });
        return ;
       }
        
        //determine if a product is already in cart
        var increaseQuntity = false;
        if(cart.length >0){
            cart.map(item => {
                //compare attributes against all for the product
                if(item.id === attributesOfSelectedProduct.id){
                    var itemInCart = compareObjects(item.attributes, attributesOfSelectedProduct.attributes)
                   
                    if(itemInCart) {
                         item.quantity +=1;
                         increaseQuntity = true ;
                         updateSelectedItem(item);
                         setInfoMessage("success");
                         e.target.reset();
                         setTimeout(()=>{
                            setInfoMessage('')}
                            , 3000);
                         
                     }
                    
                }
                
            }) 
            
            if(!increaseQuntity) {
                addToCart(attributesOfSelectedProduct);
                setInfoMessage("success");
                e.target.reset();
                setTimeout(()=>{
                    setInfoMessage('')}
                    , 3000);
                
               
            }
        
        } else {
            
            addToCart(attributesOfSelectedProduct)
            setInfoMessage("success");
            e.target.reset();
            console.log(stateChecked);
            setTimeout(()=>{
                setInfoMessage('')}
                , 3000);
            
          
        }
        
        /* clear state */
        dispatch({ type: "reset" });
      };
      console.log(stateChecked);
      console.log(cart)

     
    const handleItemUpdate =useCallback( (item, currentaction) => {
            console.log(currentaction)

        if (currentaction === "increase") {
                item.quantity +=1; 
                updateSelectedItem(item);
                console.log(cart)
        }

        if (currentaction === "decrease") {
            item.quantity -=1; 
            updateSelectedItem(item);
            console.log(cart)
    }
   
        
    }, []);
    
    return(
        <>
        <div className="productDetails #container"> 
        
            <form className="productDetailsForm" onSubmit={handleAddtoCart} >
                <ProductFormFields product={product} handleInputChange={handleInputChange} handleChange={handleChange} stateChecked={stateChecked} attributesSelected={attributesSelected} />
                <Button  className="buttonAddToCart" type="submit" value="Add to cart" />
            </form>

            {typeof categoryname === 'undefined' ? 
            
                        <div className="adjustQuntity">
                        <ButtonQuantity className="buttonIncreaseQuantity" onClick={()=>handleItemUpdate(item, "increase")} />
                        <div className="itemQuntity">{item.quantity} </div>
                        <ButtonQuantity  className="buttonDecreaseQuantity" onClick={()=>handleItemUpdate(item, "decrease")} />
                        </div> : 
                        <>
                        <div className="infoMessage">
                            {renderMessage(infoMessage)}
                        </div>
                        <div className="productDescription">{htmlFrom(product.description)}</div>
                        </>
            }
            
            
            
        </div>
            

        </>
    );


    }
   
    const mapStateToProps = state => ({
        cart: getCart(state),
        cartQuntity: getCartQuntity(state)
       
    });
    
    const mapDispatchToProps = dispatch => ({
      addToCart: item => dispatch(addNewItemToCart(item)),
      updateSelectedItem: item => dispatch(updateItem(item)),
      
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

