function solve(inputNumber)
{
    let inputString=String(inputNumber);
    let sum=0;
    let counter=1;
    for(let i=0;i<inputString.length;i++)
    {
        if (inputString[i]==inputString[i+1]) {
            counter++;
        }
        sum=sum+Number(inputString[i]);
    }
    if(counter==inputString.length)
        console.log("true");
    else
        console.log("false")
    console.log(sum);
}
solve(1234);