function Fibonacci(n,starting){
//   if(n<=1) return n;
//   return Fibonacci(n-1) + Fibonacci(n-2);
if(starting===1){
let array =[1,1]
for(let i=2;i<n;i++){
    array[i]=i;
    array[i]=array[i-1]+array[i-2]
}
return array;
}else{
    let array1 =[0,1]
for(let i=2;i<n;i++){
    array1[i]=i;
    array1[i]=array1[i-1]+array1[i-2]
}
return array1;
}


}
console.log(Fibonacci(12,1));