# MEMOIZATION

Memoization is a kinda cache mechanism which lets you to store and use the resultant of frequently done operation.
It does a huge impact when it comes to optimizing performance of the web application.

## Use Cases
1. Fibonacci series

It is a series of numbers in which each number is a sum of preceeding two numbers.
Example: 0,1,1,2,3,5, etc.

For fibonacci(7) -> fibonacci(5)+fibonacci(6)
For fibonacci(8) -> fibonacci(6)+fibonacci(7)
For fibonacci(9) -> fibonacci(7)+fibonacci(8)

It is observed that everytime you calculate new fibonacci series of any integer n same operation is repeated and it can be reduced if we use memoization technique

2. Armstrong number

Similarly for 3 digit armstrong number calculation if cube can reduced using this technique as show below

## Implementation

```javascript
function threeDigitArmstrongNum(num) {
    firstDigit = Math.floor(num / 100)
    secondDigit = Math.floor((num / 10)) % 10
    thirdDigit = (num % 10)
    result = calculateCube(firstDigit) + calculateCube(secondDigit) + calculateCube(thirdDigit)
    if (result == num) {
        return true
    }
    return false
}

function calculateCube(num) {
    if (tempResult[num] == null) {
        tempResult[num] = Math.pow(num, 3)
    }
    return tempResult[num]
}
```