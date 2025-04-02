function addition() {
    var firstNumber = Number(number1.value) 
    var secondNumber = Number(number2.value) 
    var sum = firstNumber + secondNumber
    // console.log(sum);
    var showResult = " The Sum is " + sum
    showAnswer.innerHTML = showResult
    
}

function subtraction() {
    var firstNumber = Number(number1.value) 
    var secondNumber = Number(number2.value) 
    var subtract = firstNumber - secondNumber
    // console.log(sum);
    var showResult = " The Subtraction is " + subtract
    showAnswer.innerHTML = showResult
    
}

function division() {
    var firstNumber = Number(number1.value) 
    var secondNumber = Number(number2.value) 
    var divide = firstNumber / secondNumber
    // console.log(sum);
    var showResult = " The Division is " + divide
    showAnswer.innerHTML = showResult
    
}


function multiplication() {
    var firstNumber = Number(number1.value) 
    var secondNumber = Number(number2.value) 
    var multiple = firstNumber * secondNumber
    // console.log(sum);
    var showResult = " The Multiplication is " + multiple
    showAnswer.innerHTML = showResult
    
}