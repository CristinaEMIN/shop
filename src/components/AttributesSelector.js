import {useReducer, useCallback, useEffect, useRef} from "react";


const AttributesSelector = ({attributes, handleInputChange, handleChange, stateChecked, attributesSelected}) => {

   
    
    

    const getRadioProps = useCallback(( name, value, attributesSelected, stateChecked ) => {
        return {
          name,
          value,
          type: "radio",
          onClick:  handleInputChange,
          onChange:   handleChange, 
          checked: (typeof attributesSelected[name] !== 'undefined' && attributesSelected[name] == value) ? true : (typeof stateChecked[name] !== 'undefined' && stateChecked[name] == value ? true : false) , 
        };
      }, []);


   
    
    

    return(
        <div className="productAttributes">
        
        {attributes.map((attribute, key) => {
            switch(attribute.name) {
                case 'Size':
                    return (
                        <label key={key}>
                            <span className="labelName"> 
                            {attribute.name}:
                            </span>
                        
                                    <div className="attributesValues">
                                    {attribute.items.map((item, key) => (
                                        <label key={key} className="labelSize">
                                            {/* <input type="radio" value={item.value} name="size" onChange={handleInputChange}/> */}
                                            <input {...getRadioProps("size", item.value, attributesSelected, stateChecked  )} />
                                            <span className="checkmark">{item.displayValue}</span>
                                        </label>
                                        
                                        
                                    ))}
                                    </div>
                            
                                
                            </label>
                        );
                        break;
                case 'Color':
                    return (
                        <label key={key}>
                            <span className="labelName">
                            {attribute.name}:
                            </span>
                        
                            <div className="attributesValues">
                                {attribute.items.map((item, key) => (
                                    <label key={key} className="labelColor" >
                                        {/* <input type="radio" value={item.value} name="color" onChange={handleInputChange}/> */}
                                        <input {...getRadioProps("color", item.value, attributesSelected, stateChecked  )} />
                                        <span className="checkmark" style={{backgroundColor: `${item.value}`}} ></span>
                                    </label>
                                ))}
                                
                            </div>
                            
                        </label>
                    );
                    break;
                case 'Capacity':
                        return (
                            <label key={key}>
                                <span className="labelName">
                                {attribute.name}:
                                </span>
                                
                                <div className="attributesValues">
                                    {attribute.items.map((item, key) => (
                                        <label key={key} className="labelSize" >
                                            {/* <input type="radio" value={item.value} name="capacity" onChange={handleInputChange}/> */}
                                            <input {...getRadioProps("capacity", item.value, attributesSelected, stateChecked  )} />
                                            <span className="checkmark" style={{backgroundColor: `${item.value}`}} > {item.displayValue}</span>
                                        </label>
                                    ))}
                                    
                                </div>
                                
                            </label>
                        );
                        break;
                default:
                    return(
                        <label key={key}>
                                <span className="labelName">
                                {attribute.name}:
                                </span>
                                
                                <div className="attributesValues">
                                    {attribute.items.map((item, key) => (
                                        <label key={key} className="labelSize" >
                                            {/* <input type="radio" value={item.value} name= {attribute.name} onChange={handleInputChange} /> */}
                                            <input {...getRadioProps(attribute.name, item.value, attributesSelected, stateChecked  )} />
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

