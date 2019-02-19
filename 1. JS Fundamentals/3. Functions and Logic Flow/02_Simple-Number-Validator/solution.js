function validate() {
   let button=document.getElementsByTagName('button')[0];
   let numbersWeight=[2, 4, 8, 5, 10, 9, 7, 3, 6];
   let productsResult=0;
   button.addEventListener('click',event=>
{
    let numbers=Array.from(document.getElementsByTagName('input')[0].value);
    if(numbers.length===10)
    {
        for(let i=0;i<9;i++)
        {
            productsResult+=numbers[i]*numbersWeight[i];
        }
        let result=(productsResult%11==numbers[9]||productsResult%11==10&&numbers[9]==0)?"This number is Valid!":"This number is NOT Valid!";
      document.getElementById('response').textContent=result;
    }

})
}