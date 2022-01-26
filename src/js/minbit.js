// Min Bit
let minDecimal = document.getElementById('minDecimal');
let minDecimalLabel = document.getElementById('minDecimalLabel');
let minDecimalPattern = new RegExp(minDecimal.getAttribute('pattern'));

let minHexadecimal = document.getElementById('minHexadecimal');
let minHexadecimalLabel = document.getElementById('minHexadecimalLabel');
let minHexadecimalPattern = new RegExp(minHexadecimal.getAttribute('pattern'));

let minBits = document.getElementById('minBits');

minDecimal.addEventListener('keyup', () => {
    if (minDecimal.value.length && minDecimalPattern.test(minDecimal.value)) {
        minHexadecimalLabel.style.display = 'none';

        let result = parseInt(minDecimal.value);
        minHexadecimal.value = result.toString(16).toUpperCase();
        minBits.innerText = `${Math.floor(Math.log2(result)) + 1} bits`;
    } else {
        minHexadecimal.value = '';
        minHexadecimalLabel.style.display = 'block';
        minBits.innerText = '';
    }
});

minHexadecimal.addEventListener('keyup', () => {
    if (minHexadecimal.value.length && minHexadecimalPattern.test(minHexadecimal.value)) {
        minDecimalLabel.style.display = 'none';

        let result = parseInt(minHexadecimal.value, 16);
        minDecimal.value = result.toString();
        minBits.innerText = `${Math.floor(Math.log2(result)) + 1} bits`;
    } else {
        minDecimal.value = '';
        minDecimalLabel.style.display = 'block';
        minBits.innerText = '';
    }
});
