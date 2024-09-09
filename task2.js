// Напишите программу, которая выводит все числа от 1 до 100, заменяя числа, кратные 3, на слово "Fizz", 
// числа, кратные 5, на "Buzz", а числа, кратные и 3, и 5, на "FizzBuzz"

function writeNums() {
    for (let num = 1; num <= 100; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log("FizzBuzz")
        } else if (num % 3 == 0) {
            console.log("Fizz")
        } else if (num % 5 == 0) {
            conslode.log("Buzz")
        } else {
            console.log(num)
        }
    }
}
