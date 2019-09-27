const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr;
    let splitWords = [];
    for(let i = 0 ; i < str.length ; i += 10 ) {
        splitWords.push(str.slice(i, (i + 10)))
    }

    splitWords = splitWords.map(wordCode => wordCode.slice( wordCode.indexOf('1'), 10) )

    splitWords = splitWords.map(wordCode => {
        if(wordCode === "*") return " ";
        let code = '';
        for(let i = 0; i < wordCode.length; i += 2 ) {
            code += wordCode.slice(i, (i + 2)) === "10" ? "." : "-";
        }
        return MORSE_TABLE[code];
    })

    return splitWords.join("");   
}

module.exports = {
    decode
}