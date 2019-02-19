function solve(firstNumber,secondNumber)
{
    if(!secondNumber) {
        console.log(firstNumber);

    }
    else {
        solve(secondNumber, firstNumber % secondNumber);
    }
}
solve(5,15);