let number = [1,2,3]
let numbers = [...number,4,5,6]
console.log(numbers);

function multiply(...value) {
    return value.reduce((total, num) => total * num, 1);
}

console.log(multiply(10, 2, 3)); 
