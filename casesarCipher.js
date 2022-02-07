function casesarCipher(phrase, shift) {
    let cipher = "";
    for(let i = 0; i<phrase.length; i++){
        let char = phrase[i];
        if (char.charCodeAt(0) == 32) {
            cipher += phrase[i];
        }
        else {
            char = phrase.charCodeAt(i);
            let newChar = _getCharacter(char, shift);
            cipher += String.fromCharCode(newChar);
        }
    }
    return cipher;
}

 function _getCharacter(char, shift) {
    if (char >= 65 && char <= 90){//uppercase
        char = char + shift;
        if(char < 65){
            char = char + 26;
        }
        else if(char > 90){
            char = char - 26;
        }
        return char
    }
    else if(char >= 97 && char <=122){//lowercase
        char = char + shift;
        if(char < 97){
            char = char + 26;
        }
        else if(char > 122){
            char = char - 26;
        }
        return char;
    }
    else{//other characters
        return char;
    }
 }

module.exports = casesarCipher;