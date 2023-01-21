function findShortestWord(str) {
    let words = str.split(" ");
    let shortestLength = words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestLength) {
            shortestLength = words[i].length;
        }
    }
    return shortestLength;
}
console.log(findShortestWord("Simple given a string of words"))
