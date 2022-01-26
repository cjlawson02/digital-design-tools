// Two's comp - WIP

function signedBinToDec(binary) {
    let binaryStr = binary.toString();
    return parseInt(binaryStr[0] === '1' ?
        binaryStr.padStart(32, '1') : binaryStr.padStart(32, '0'), 2) >> 0;
}

function signedDecToBin(decimal, bits) {
    let binary = decimal.toString(2);

    if (decimal >= 0) return binary;

    if (!bits) bits = 0;
    else bits = parseInt(bits);

    while (decimal < (-(1 << (bits - 1))) || decimal > ((1 << (bits - 1)) - 1)) {
        bits++;
    }

    return ~(((decimal) - 1) | ~((1 << bits) - 1)).toString(2);
}


let twosDecimal = document.getElementById('twosDecimal');
let twosDecimalLabel = document.getElementById('twosDecimalLabel');
let twosDecimalPattern = new RegExp(twosDecimal.getAttribute('pattern'));

let twosHexadecimal = document.getElementById('twosHexadecimal');
let twosHexadecimalLabel = document.getElementById('twosHexadecimalLabel');
let twosHexadecimalPattern = new RegExp(twosHexadecimal.getAttribute('pattern'));

let twosBinary = document.getElementById('twosBinary');
let twosBinaryLabel = document.getElementById('twosBinaryLabel');
let twosBinaryPattern = new RegExp(twosBinary.getAttribute('pattern'));

let twosBits = document.getElementById('twosBits');
let twosBitsLabel = document.getElementById('twosBitsLabel');
let twosBitsPattern = new RegExp(twosBits.getAttribute('pattern'));

twosDecimal.addEventListener('keyup', () => {
    if (twosDecimalPattern.test(twosDecimal.value)) {
        twosHexadecimalLabel.style.display = 'none';
        twosBinaryLabel.style.display = 'none';

        let result = parseInt(twosDecimal.value);
        twosBinary.value = signedDecToBin(result, twosBits.value);
        twosHexadecimal.value = twosBinary.value.toString(16).toUpperCase();
    } else if (twosDecimal.value[0] !== '-') {
        twosHexadecimal.value = '';
        twosBinary.value = '';
        twosBits.value = '';
        twosHexadecimalLabel.style.display = 'block';
        twosBinaryLabel.style.display = 'block';
        twosBitsLabel.style.display = 'block';
    }
});

twosHexadecimal.addEventListener('keyup', () => {
    if (twosHexadecimalPattern.test(twosHexadecimal.value)) {
        twosDecimalLabel.style.display = 'none';
        twosBinaryLabel.style.display = 'none';
        twosBitsLabel.style.display = 'none';

        let result = parseInt(twosHexadecimal.value, 16);
        twosDecimal.value = signedBinToDec(result.toString(2));
        twosBinary.value = result.toString(2);
        twosBits.value = twosBinary.value.length;
    } else {
        twosDecimal.value = '';
        twosBinary.value = '';
        twosBits.value = '';
        twosDecimalLabel.style.display = 'block';
        twosBinaryLabel.style.display = 'block';
        twosBitsLabel.style.display = 'block';
    }
});

twosBinary.addEventListener('keyup', () => {
    if (twosBinaryPattern.test(twosBinary.value)) {
        twosDecimalLabel.style.display = 'none';
        twosHexadecimalLabel.style.display = 'none';
        twosBitsLabel.style.display = 'none';

        twosBits.value = twosBinary.value.length;

        twosDecimal.value = signedBinToDec(twosBinary.value);
        twosHexadecimal.value = parseInt(twosBinary.value, 2).toString(16).toUpperCase();
    } else {
        twosDecimal.value = '';
        twosHexadecimal.value = '';
        twosBits.value = '';
        twosDecimalLabel.style.display = 'block';
        twosHexadecimalLabel.style.display = 'block';
        twosBitsLabel.style.display = 'block';
    }
});

twosBits.addEventListener('keyup', () => {
    if (twosBits.value.length && twosBitsPattern.test(twosBits.value)) return;
    twosBits.value = null;
});
