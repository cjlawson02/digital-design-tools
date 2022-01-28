// Min Bit
let minDecimal = document.getElementById('minDecimal');
let minDecimalLabel = document.getElementById('minDecimalLabel');
let minDecimalPattern = new RegExp(minDecimal.getAttribute('pattern'));

let minHexadecimal = document.getElementById('minHexadecimal');
let minHexadecimalLabel = document.getElementById('minHexadecimalLabel');
let minHexadecimalPattern = new RegExp(minHexadecimal.getAttribute('pattern'));

let minBinary = document.getElementById('minBinary');
let minBinaryLabel = document.getElementById('minBinaryLabel');
let minBinaryPattern = new RegExp(minBinary.getAttribute('pattern'));

let minBits = document.getElementById('minBits');

function commitBitByte(bits, bytes) {
    minBits.innerText = bits === 1 ? `${bits} bit / ${bytes} byte` : `${bits} bits / ${bytes} bytes`;
}

function processBitByte(result) {
    let bits = Math.floor(Math.log2(result)) + 1;
    commitBitByte(bits, Math.ceil(bits / 8));
}


minDecimal.addEventListener('keyup', () => {
    if (minDecimal.value.length && minDecimalPattern.test(minDecimal.value)) {
        minHexadecimalLabel.style.display = 'none';
        minBinaryLabel.style.display = 'none';

        let result = parseInt(minDecimal.value);
        minHexadecimal.value = result.toString(16).toUpperCase();
        minBinary.value = result.toString(2);
        processBitByte(result)
    } else {
        minHexadecimal.value = '';
        minBinary.value = '';
        minHexadecimalLabel.style.display = 'block';
        minBinaryLabel.style.display = 'block';
        minBits.innerText = '';
    }
});

minHexadecimal.addEventListener('keyup', () => {
    if (minHexadecimal.value.length && minHexadecimalPattern.test(minHexadecimal.value)) {
        minDecimalLabel.style.display = 'none';
        minBinaryLabel.style.display = 'none';

        let result = parseInt(minHexadecimal.value, 16);
        minDecimal.value = result.toString();
        minBinary.value = result.toString(2);
        processBitByte(result)
    } else {
        minDecimal.value = '';
        minBinary.value = '';
        minDecimalLabel.style.display = 'block';
        minBinaryLabel.style.display = 'block';
        minBits.innerText = '';
    }
});

minBinary.addEventListener('keyup', () => {
    if (minBinary.value.length && minBinaryPattern.test(minBinary.value)) {
        minDecimalLabel.style.display = 'none';
        minHexadecimalLabel.style.display = 'none';

        let result = parseInt(minBinary.value, 2);
        minDecimal.value = result.toString();
        minHexadecimal.value = result.toString(16).toUpperCase();
        commitBitByte(minBinary.value.length, Math.ceil(minBinary.value.length / 8));
    } else {
        minDecimal.value = '';
        minHexadecimal.value = '';
        minDecimalLabel.style.display = 'block';
        minHexadecimalLabel.style.display = 'block';
        minBits.innerText = '';
    }
});
