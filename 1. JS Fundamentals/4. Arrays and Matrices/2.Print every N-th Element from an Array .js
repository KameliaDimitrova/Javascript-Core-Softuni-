function main(input)
{
  let step=Number(input[input.length-1]);
  let array=input.slice(0,input.length-1);
 for(let i=0;i<array.length;i+=step)
 {
   console.log(array[i]);
 }
}
main(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);