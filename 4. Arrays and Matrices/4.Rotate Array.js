function main(input)
{
    let countOfRotations=input[input.length-1];
    let arr=input.slice(0,input.length-1);
    if(arr.length!=0)
    {
    for(let i=0;i<countOfRotations%arr.length;i++)
    {
        arr.unshift(arr.pop());
    }
  }
    
    console.log(arr.join(' '));
}
main(['2']
);