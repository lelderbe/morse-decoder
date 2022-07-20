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
};

function decode(input) {
    function getLetter(input) {
        const symbols = { '00': '', 10: '.', 11: '-' };
        const key = [];

        if (input === '**********') {
            return ' ';
        }

        for (let i = 0; i < input.length; i += 2) {
            const part = input.slice(i, i + 2);
            key.push(symbols[part]);
        }

        return MORSE_TABLE[key.join('')];
    }

    const decodedText = [];

    for (let i = 0; i < input.length; i += 10) {
        const part = input.slice(i, i + 10);
        decodedText.push(getLetter(part));
    }

    return decodedText.join('');
}

module.exports = {
    decode,
};
