let num1 = Number(prompt('Enter a number'));
let operator = prompt('Enter an operator');
let num2 = Number(prompt('Enter a number'));
let result;
if (operator == '+'){
    result = num1 + num2;
}
else if (operator == '-'){
    result = num1 - num2;
}
else if (operator == '/'){
    result = num1 / num2;
}
else if (operator == '*'){
    result = num1 * num2;
}
else{
    result = "invalid operator";
}
alert(result);