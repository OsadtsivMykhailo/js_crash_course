//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function celsiusToFahrenheit (celsius) {
    return celsius / 5 * 9 + 32;
}
console.log(celsiusToFahrenheit(60));

function fahrenheitToCelsius (fahrenheit) {
    return (fahrenheit - 32) / 9 * 5;
}
console.log(fahrenheitToCelsius(45));