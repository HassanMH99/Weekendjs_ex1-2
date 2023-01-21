function Mask(str){
let mask = str.slice(-4);
let len = str.length-4
let newword ;
let dash="#";
       newword= dash.repeat(len);
    return newword+mask
}

let mask = "Skippy"
console.log(Mask(mask));
