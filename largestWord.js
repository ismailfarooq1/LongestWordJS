

// checks for most vowels between two words
function mostVowels(wordOne, wordTwo)
{
     if (wordTwo.match('[aeiou]').length > wordOne.match('[aeiou]').length) {
        return wordTwo;
     }

     return wordOne;
}

// Find the largest word in a sentence.
function largestWord(sentence)
{
    if (sentence) {
        var words = sentence.split(' ')
        length = 0;
        longest = "";
        words.map((word) => {
            if (word.length > length) {
                longest = word;
                length = word.length;
            } 
            else if (word.length == length) {
                longest = mostVowels(word, longest);
            }
        });
    
        return longest;
    }
    return false;
}


var sentence = "Smart people learn from everything and everyone, average people from their experience, experience stupid people already, have all the answers";
sentence = sentence.replace(/[,?.;'{}()@#$%^&*()-+=]*/g, '');
result = largestWord(sentence);

console.log(result);