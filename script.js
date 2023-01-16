const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys'); 

let displayValue = '0';


uptadeDisplay();


function uptadeDisplay() {
    display.value = displayValue;
}
