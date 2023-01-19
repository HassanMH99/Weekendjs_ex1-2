function sum(array){
    let sum =0;
        array.sort((a,b)=>a-b)
        sum=array[0]+array[1];
    
    
    return sum;

}

const array = [19,5,42,2,77]
const array1 =[10, 343445353, 3453445, 3453545353453] 
const sumlowest=sum(array)
console.log(sumlowest);
console.log(sum(array1));