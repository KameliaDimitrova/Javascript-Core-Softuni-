function solve() {
  
   let button=document.getElementsByTagName('button')[0];
   let output=document.getElementById('output')
   button.addEventListener('click',event=>
{
    let input=document.getElementById('input').value;
    let regex=/<([\w]+)[^>]*>(.*?)<\/\1/g>;
    let regex=/([0-9]+)(.*)/g;
      let matches=(regex.exec(input));
       let charactersCount=matches[1];
    input=matches[2];
    input=input.substr(0,charactersCount);   
    let splitChar=input[input.length-1];
    input=input.split(splitChar).filter(x=>x!="");
    console.log(input);
    let regex2=new RegExp(`[${input[0]}]`,'g');
    let finalText=input[1];  
    finalText=finalText.replace(regex2,""); 
    finalText=finalText.replace(/#/g," "); 
    output.value=finalText;   
})
}