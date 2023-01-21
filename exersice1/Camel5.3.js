function toCamelCase(str){
    let word =str.split("-")
    for(let i=0;i<word.length;i++){
        word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
    }
    return word.join("");
}
console.log(toCamelCase("the-stealth-warrior") );