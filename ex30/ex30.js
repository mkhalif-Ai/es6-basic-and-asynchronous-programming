function operate(a,b,callback){
    return callback(a,b)
}
function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}
console.log("addition is:",operate(5,3, add));
console.log("subtraction is:",operate(7,3, subtract));
console.log("multiplication is:",operate(10,3, multiply));
console.log("division is:",operate(15,3, divide));