export function wordleAlgorithm(word, guess) {
    if (word.length !== guess.length) return null;

    let ordArray = word.split("");
    let status = [];
    let guessArr = guess.split("");
    
    // Mark CORRECT matches first
    guessArr.forEach((char, i) => {
        if (char === ordArray[i]) {
            status[i] = "correct";
            ordArray[i] = null; 
        }
    });

    // Mark everything else
    guessArr.forEach((char, i) => {
        if (status[i]) return;

        let foundIndex = ordArray.indexOf(char);

        if (foundIndex !== -1) {
            status[i] = "misplaced";
            ordArray[foundIndex] = null; 
        } else {
            let extra = word.includes(char) ? `(eftersom det redan finns ett korrekt ${char})` : "";
            status[i] = `incorrect ${extra}`.trim();
        }
    });

    return status;
}

