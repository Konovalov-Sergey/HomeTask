



var add = function(a, b) {
    return a + b;
};
var sub = function(a, b) {
    return a - b;
};
var mul = function(a, b) {
    return a * b
};
var div = function(a, b) {
    return a / b
};
var mod = function(a, b) {
    return a % b
};
function show(callBackFunction, a, b) {
    var result = callBackFunction(a, b);
    alert(result);
}
var number1 = parseInt(prompt("Введите первое число: "));
var sign = prompt("Введите знак арифметической операции: + - * / %");
var number2 = parseInt(prompt("Введите второе число: "));

switch(sign) {
    case "+":
        show(add, number1, number2);
        break;
    case "-":
        show(sub, number1, number2);
        break;
    case "/":
        show(div, number1, number2);
        break;
    case "*":
        show(mul, number1, number2);
        break;
    case "%":
        show(mod, number1, number2);
        break;
}