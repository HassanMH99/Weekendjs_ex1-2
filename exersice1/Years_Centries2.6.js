function centuryFromYear(year){
    let cent=0;
        cent = year/100;
        cent = Math.ceil(cent);
    return cent;

}


console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
