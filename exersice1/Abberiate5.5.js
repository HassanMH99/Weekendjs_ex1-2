function Abbreviate(str){
    let word =str.split(" ")
    for(let i=0;i<word.length;i++){
        word[i]=word[i].charAt(0).toUpperCase()
    }
    return word.join(".");


}
console.log(Abbreviate("Patrick Feeney"));