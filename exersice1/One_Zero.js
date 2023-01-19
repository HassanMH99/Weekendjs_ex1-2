const array = [1,1,1,1,1]
lengthofarray= array.length;
let number =0;
let n=0;
for(let i=lengthofarray-1;i>=0;i--){
    if(array[i]===1){
    number+=2**n;
}
    n++;
   
}
console.log(number);