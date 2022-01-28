// Two's comp - WIP
function signedBinToDec(binary) {
    let binaryStr = binary.toString();
    return parseInt(binaryStr[0] === '1' ?
        binaryStr.padStart(32, '1') : binaryStr.padStart(32, '0'), 2) >> 0;
}

function signedDecToBin(decimal, bits) {
    let posBin = `${''.padStart(bits, '0')}${decimal.toString(2)}`;
    if (decimal >= 0) return posBin.length < bits ? posBin : 'Not enough bits!';

    return (decimal + Math.pow(2, bits)).toString(2);
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
    if (twosDecimal.value.length && twosBits.value.length && twosDecimalPattern.test(twosDecimal.value)) {
        twosHexadecimalLabel.style.display = 'none';
        twosBinaryLabel.style.display = 'none';

        let result = parseInt(twosDecimal.value);
        twosBinary.value = signedDecToBin(result, twosBits.value);
        twosHexadecimal.value = result.toString(16).toUpperCase();
    } else if (twosDecimal.value[0] !== '-') {
        twosHexadecimal.value = '';
        twosHexadecimalLabel.style.display = 'block';
        twosBinary.value = '';
        twosBinaryLabel.style.display = 'block';
    }
});

twosHexadecimal.addEventListener('keyup', () => {
    if (twosHexadecimal.value.length && twosHexadecimalPattern.test(twosHexadecimal.value)) {
        twosDecimalLabel.style.display = 'none';
        twosBinaryLabel.style.display = 'none';
        twosBitsLabel.style.display = 'none';

        let binResult = parseInt(twosHexadecimal.value, 16).toString(2);
        twosBinary.value = (twosHexadecimal.value.length > 1 && twosHexadecimal.value[0] === '0') ? `0${binResult}` : binResult;
        twosDecimal.value = signedBinToDec(twosBinary.value);
        twosBits.value = twosBinary.value.length;
    } else {
        twosDecimal.value = '';
        twosDecimalLabel.style.display = 'block';
        twosBinary.value = '';
        twosBinaryLabel.style.display = 'block';
        twosBits.value = '';
        twosBitsLabel.style.display = 'block';
    }
});

twosBinary.addEventListener('keyup', () => {
    if (twosBinary.value.length && twosBinaryPattern.test(twosBinary.value)) {
        twosDecimalLabel.style.display = 'none';
        twosHexadecimalLabel.style.display = 'none';
        twosBitsLabel.style.display = 'none';

        twosBits.value = twosBinary.value.length;

        twosDecimal.value = signedBinToDec(twosBinary.value);
        let hexResult = parseInt(twosBinary.value, 2).toString(16).toUpperCase();
        twosHexadecimal.value = twosBinary.value[0] === '0' ? `0${hexResult}` : hexResult;
    } else {
        twosDecimal.value = '';
        twosDecimalLabel.style.display = 'block';
        twosHexadecimal.value = '';
        twosHexadecimalLabel.style.display = 'block';
        twosBits.value = '';
        twosBitsLabel.style.display = 'block';
    }
});

twosBits.addEventListener('keyup', () => {
    if (twosBits.value.length && twosDecimal.value.length && twosBitsPattern.test(twosBits.value)) {
        twosHexadecimalLabel.style.display = 'none';
        twosBinaryLabel.style.display = 'none';
        twosBinary.value = signedDecToBin(twosDecimal.value, twosBits.value);
    } else {
        twosDecimal.value = '';
        twosDecimalLabel.style.display = 'block';
        twosHexadecimal.value = '';
        twosHexadecimalLabel.style.display = 'block';
        twosBinary.value = '';
        twosBinaryLabel.style.display = 'block';
    }
});
