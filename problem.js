function rotateLeft(array, rotation){
    
    for(let i = 1; i <= rotation; i++) {
        
        const toPush = array.shift();
        array.push(toPush)
    }
    
    return array
}

console.log(rotateLeft([1,2,3,4,5], 2))