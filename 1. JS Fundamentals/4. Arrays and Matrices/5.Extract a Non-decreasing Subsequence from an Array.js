function main(input)
{
  let decreasingArr=[];
  let lastElement=0;
  for (let i=0;i<input.length;i++)
  { 
    if(i==0)
    {
      lastElement=input[0];  
      decreasingArr.push(lastElement); 
    }
    if(input[i]>lastElement){
   
        lastElement=input[i];
        decreasingArr.push(lastElement);
      }
    }
   
  console.log(decreasingArr.join('\n'));   
 
}

main([1, 
  3, 
  8, 
  4, 
  10, 
  12, 
  3, 
  2, 
  24]
  )
