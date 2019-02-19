function greatestCD() {
    
    let firstNumber=Number(document.getElementsByTagName('input')[0].value);
    let secondNumber=Number(document.getElementsByTagName('input')[1].value);
    let result=(greatestDivisor(firstNumber,secondNumber));
    document.getElementById('result').textContent=result;
    
    
    function greatestDivisor(firstNumber,secondNumber)
    {
            if (secondNumber) {
                return greatestDivisor(secondNumber, firstNumber % secondNumber);
            } else {
                return Math.abs(firstNumber);
            }
        }    
   
}