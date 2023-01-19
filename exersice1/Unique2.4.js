function findUniq(array){
    array.sort((a,b)=>a-b)
    if(array[0]===array[1]){
        return array[array.length-1]
    }else
    return array[0];
    
   
}






const array = [1,3,1,1,1]
const array2 = [ 0, 0, 0.55, 0, 0 ];
console.log(findUniq(array));
console.log(findUniq(array2));