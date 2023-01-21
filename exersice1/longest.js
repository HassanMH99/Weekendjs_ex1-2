function findlongesttWord(str) {
    let words = str.split(" ");
    let longestLength = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestLength) {
            longestLength = words[i].length;
        }
    }
    return longestLength;
}
console.log(findlongesttWord("Simple given a string of words"))
