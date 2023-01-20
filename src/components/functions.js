const isObject = (obj) => {
    return (Object.prototype.toString.call(obj) === '[object Object]');
}


export function compareObjectExeceptKey(object1, object2, exceptKeys){
   
    if(!isObject(object1) || !isObject(object2)){
        return false;
    }

    let exclude = new Set(exceptKeys)
    let obj1 =  Object.fromEntries(Object.entries(object1).filter(e => !exclude.has(e[0])))
    let obj2 =  Object.fromEntries(Object.entries(object2).filter(e => !exclude.has(e[0])))
   

    let len = null;
    //check if they're of thesame length
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }else{
        len = Object.keys(obj1).length; //use any length
    }

    let match = 0; //store number of matched properties
    Object.keys(obj1).forEach(i => {
        //check if values with the same keys are equal
        if(obj1[i] === obj2[i]){
        match++; //increment the variable
    } }
        )
    //check if object length equals the number of matched properties
    if(match === len){
        return true;
    }

    return false;
}