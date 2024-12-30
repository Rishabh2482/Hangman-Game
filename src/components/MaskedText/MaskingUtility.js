function maskingUtility(originalWord,guessedLetter){
    guessedLetter=guessedLetter.map((letter)=>letter.toUpperCase());

    guessedLetter=new Set(guessedLetter);
    console.log(guessedLetter);

    originalWord=originalWord.split("").map((letter)=>letter.toUpperCase());

    let maskedOutput=originalWord.map((letter)=>{
        if(guessedLetter.has(letter))
            return letter;
        else
            return '_';
    })
    console.log(maskedOutput);
    
    return maskedOutput;
}

export default maskingUtility;