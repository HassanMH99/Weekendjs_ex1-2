function findNextSquare(n){
    sqrt = Math.sqrt(n);
    if(Number.isInteger(sqrt)){
        sqrt+=1;
        return sqrt *sqrt;
    }else{
        return -1;
    }

}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));