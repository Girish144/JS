function countWords(sentence) {
    let words = sentence.split(" ");
    let result = {};

    for (let word of words) {
        if (result[word]) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }

    return result;
}
let sentence = "apple banana apple orange banana apple";
console.log(countWords(sentence));