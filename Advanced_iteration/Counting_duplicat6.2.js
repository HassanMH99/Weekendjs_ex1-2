function findDuplicates(str) {
    let charCount = {};
    let duplicates = {};
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates[char] = charCount[char];
        }
    }
    return duplicates;
}
console.log(findDuplicates("aabbccdd"))
