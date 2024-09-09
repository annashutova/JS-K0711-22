// Напишите функцию, которая принимает число и возвращает true, если оно простое, и false, если нет.
// Число считается простым, если оно больше 1 и делится только на 1 и само на себя.

function checkPrime(num) {
    if (num == 1) return true

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false
    }

    return true
}