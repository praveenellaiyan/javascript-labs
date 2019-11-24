var tempResult = []

function threeDigitArmstrongNum(num) {
    firstDigit = Math.floor(num / 100)
    secondDigit = Math.floor((num / 10)) % 10
    thirdDigit = (num % 10)
    result = calculateCube(firstDigit) + calculateCube(secondDigit) + calculateCube(thirdDigit)
    if (result == num) {
        console.log(num + " is an Armstrong number")
    } else {
        console.log(num + " is not an Armstrong number")
    }
}

function calculateCube(num) {
    if (tempResult[num] == null) {
        tempResult[num] = Math.pow(num, 3)
    }
    return tempResult[num]
}

threeDigitArmstrongNum(153)
threeDigitArmstrongNum(989)
threeDigitArmstrongNum(872)
threeDigitArmstrongNum(640)