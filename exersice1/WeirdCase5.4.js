function WeirdCase(str){
    let word = str.split(" ");
    for(let i=0;i<str.length;i++){
        if(i%2==0){
            word[i]=str[i].toUpperCase();
        }else{
            word[i]=str[i].toLowerCase();
        }
    }
    return word.join("")
}

console.log(WeirdCase("Weird string case"));