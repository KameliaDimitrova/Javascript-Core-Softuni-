function getNext() {
    let number=Number(document.getElementById('num').value);
    let sequence=[];
    let nextNumber=0;
    let result=(getNextNumber(number,sequence));
    document.getElementById('result').textContent=(result.join(' '))+' ';

    function getNextNumber(number,sequence)
    {
        if(number==1)
        {
        sequence.push(1);
            return sequence;
        }
            else{
                if(number%2==0)
                {
                   nextNumber=number/2;                    
                }
                else{
                    nextNumber=(3*number)+1;                    
                }
                sequence.push(number);
                return getNextNumber(nextNumber,sequence);
            }
            }
}