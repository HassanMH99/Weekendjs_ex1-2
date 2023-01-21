function isIsogram(word) {
    let wordLowerCase = word.toLowerCase();
    let letters = new Set();
    for (let i = 0; i < wordLowerCase.length; i++) {
        if (letters.has(wordLowerCase[i])) {
            return false;
        }
        letters.add(wordLowerCase[i]);
    }
    return true;
}
console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram("aba")) // false
console.log(isIsogram("moOse")) // false
