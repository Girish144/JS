let sentence = "banana is a fruit banana is yellow";

function countwords(sentence) {
    let words = sentence.split(" ");
    let wordCount = {};

    for (let i = 0; i < words.length; i++) {
        if (wordCount[words[i]]) {
            wordCount[words[i]]++;
        } else {
            wordCount[words[i]] = 1;
        }
    }

    return wordCount;
}

console.log(countwords(sentence));