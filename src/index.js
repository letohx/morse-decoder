function decode(expr) {
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

  const arrExpr = [];

  for (let i = 0; i < expr.length; i += 10) {
    arrExpr.push(expr.slice(i, i + 10));
  }

  const matrix = arrExpr.map((item) => item.split(''));

  const matrixTrim = matrix.map((item) => {
      const newItem = [...item];
      while (newItem[0] === '0') {
        newItem.shift();
      }
      return newItem;
    });

  const morseChar = matrixTrim.map((inputArray) => {
      return inputArray.map((item, index) => {
        if (index % 2 === 0) {
          if (`${item}${inputArray[index + 1]}` === '10') {
            return '.';
          } else if (item === '*') {
            return '';
          } else {
            return '-';
          };
        };
      }).filter(Boolean).join('');
    });

  const decodedArray = morseChar.map(code => {
    if (code.length === 0) {
      return ' ';
    } else {
      return MORSE_TABLE[code];
    };
  });

  const result = decodedArray.join('');

  return result;
};

module.exports = {
    decode
};