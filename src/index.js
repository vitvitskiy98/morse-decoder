const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

function decode(expr) {
    // write your solution here
    let arr = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }
    for (let i = 0; i < arr.length; i++) {
        while (arr[i].charAt(0) === '0') {
            arr[i] = arr[i].substr(1);
        }
        arr[i] = arr[i].replace(/10/g, '.').replace(/11/g, '-');
    }
    for (let i = 0; i < arr.length; i++) {
        for (let key in MORSE_TABLE) {
            if (arr[i] == key) {
                arr[i] = MORSE_TABLE[key];
            }
        }
    }
    return arr.join('');
}

module.exports = {
    decode
}