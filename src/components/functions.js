const isObject = (obj) => {
    return (Object.prototype.toString.call(obj) === '[object Object]');
}

export function compareObjectExeceptKey(obj1, obj2, exceptKey){
    console.log(Object.keys(obj1).length)
    if(!isObject(obj1) || !isObject(obj2)){
        return false;
    }

    let len = null;
    //check if they're of thesame length
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }else{
        len = Object.keys(obj1).length; //use any length
    }

    let match = 0; //store number of matched properties
    Object.keys(obj1).forEach(i => {
        console.log(i)
        if (i == exceptKey){
            match++;
            console.log(exceptKey)
        } else {
            //check if values with the same keys are equal
            if(obj1[i] === obj2[i]){
                match++; //increment the variable
            }
        }
    })
    //check if object length equals the number of matched properties
    if(match === len){
        return true;
    }

    return false;
}