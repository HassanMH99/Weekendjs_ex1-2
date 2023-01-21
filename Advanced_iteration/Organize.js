function longest(str1, str2) {
    let combined = str1 + str2;
    let organized = [...new Set(combined.split('').sort())].join('');
    return organized;
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))