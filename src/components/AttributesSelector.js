import React from "react";


const AttributesSelector = ({attributes}) => {


    return(
        <div className="productAttributes">
        
        {attributes.map((attribute) => {
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
                                            <input type="radio" value={item.value} name="size"/>
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
                                    <label className="labelColor" >
                                        <input type="radio" value={item.value} name="color"/>
                                        <span className="checkmark" style={{backgroundColor: `${item.value}`}} ></span>
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
                                
                                <div className="attributesValues">
                                    {attribute.items.map((item) => (
                                        <label className="labelSize" >
                                            <input type="radio" value={item.value} name="capacity"/>
                                            <span className="checkmark" style={{backgroundColor: `${item.value}`}} > {item.displayValue}</span>
                                        </label>
                                    ))}
                                    
                                </div>
                                
                            </label>
                        );
                        break;
                default:
                    return(
                        <label>
                                <span className="labelName">
                                {attribute.name}:
                                </span>
                                
                                <div className="attributesValues">
                                    {attribute.items.map((item) => (
                                        <label className="labelSize" >
                                            <input type="radio" value={item.value} name= {attribute.name} />
                                            <span className="checkmark" style={{backgroundColor: `${item.value}`}} > {item.displayValue}</span>
                                        </label>
                                    ))}
                                    
                                </div>
                                
                            </label>
                            )
            }

        
        }
        )}
            

        </div>
    );


    }
   


export default AttributesSelector ;

