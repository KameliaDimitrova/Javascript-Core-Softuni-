function solve() {
    let button=document.getElementsByName('button')[0];
    let number=Number(document.getElementsByTagName('input')[0].value);
  
    let result=getNumbers(number);
    document.getElementById('result').textContent=(result.join(' '));

    function getNumbers(number)
    {
        let sequence=[];
        for(let i=1;i<=number;i++)
        {
            if(number%i===0)
            {
                sequence.push(i);
            }
        }
        return sequence;
        
    }
}