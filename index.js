const findLogestWord = (sentence) => {
    const words = sentence.match(/[a-zA-Z]+/g);
    let longestWord = "";
    let maxVowelCount = 0;

    if (words) {
        words.forEach(word => {
            const wordVowelCount = (word.match(/[aieuoAIEUO]/g) || []).length;

            if (word.length > longestWord.length || (word.length === longestWord.length && wordVowelCount > maxVowelCount)) {
                longestWord = word;
                maxVowelCount = wordVowelCount;
            }
        })
    }

    return longestWord;
}

const input = "“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)";

const output = findLogestWord(input)

console.log(output)
