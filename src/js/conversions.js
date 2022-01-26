// Conversions
let convDecimal = document.getElementById('convDecimal');
let convDecimalLabel = document.getElementById('convDecimalLabel');
let convDecimalPattern = new RegExp(convDecimal.getAttribute('pattern'));

let convHexadecimal = document.getElementById('convHexadecimal');
let convHexadecimalLabel = document.getElementById('convHexadecimalLabel');
let convHexadecimalPattern = new RegExp(convHexadecimal.getAttribute('pattern'));

let convBinary = document.getElementById('convBinary');
let convBinaryLabel = document.getElementById('convBinaryLabel');
let convBinaryPattern = new RegExp(convBinary.getAttribute('pattern'));

convDecimal.addEventListener('keyup', () => {
    if (convDecimal.value.length && convDecimalPattern.test(convDecimal.value)) {
        convHexadecimalLabel.style.display = 'none';
        convBinaryLabel.style.display = 'none';

        let result = parseInt(convDecimal.value);
        convHexadecimal.value = result.toString(16).toUpperCase();
        convBinary.value = result.toString(2);
    } else {
        convHexadecimal.value = '';
        convBinary.value = '';
        convHexadecimalLabel.style.display = 'block';
        convBinaryLabel.style.display = 'block';
    }
});

convHexadecimal.addEventListener('keyup', () => {
    if (convHexadecimal.value.length && convHexadecimalPattern.test(convHexadecimal.value)) {
        convDecimalLabel.style.display = 'none';
        convBinaryLabel.style.display = 'none';

        let result = parseInt(convHexadecimal.value, 16);
        convDecimal.value = result.toString();
        convBinary.value = result.toString(2);
    } else {
        convDecimal.value = '';
        convBinary.value = '';
        convDecimalLabel.style.display = 'block';
        convBinaryLabel.style.display = 'block';
    }
});

convBinary.addEventListener('keyup', () => {
    if (convBinary.value.length && convBinaryPattern.test(convBinary.value)) {
        convDecimalLabel.style.display = 'none';
        convHexadecimalLabel.style.display = 'none';

        let result = parseInt(convBinary.value, 2);
        convDecimal.value = result.toString();
        convHexadecimal.value = result.toString(16).toUpperCase();
    } else {
        convDecimal.value = '';
        convHexadecimal.value = '';
        convDecimalLabel.style.display = 'block';
        convHexadecimalLabel.style.display = 'block';
    }
});
