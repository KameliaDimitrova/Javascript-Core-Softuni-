function solve() {
let buttons=Array.from(document.getElementsByTagName('button'));
buttons.forEach(btn=>{
    btn.addEventListener('click',event=>
{
    let button=event.target.textContent;
    let inputNumber=Number(document.getElementsByTagName('input')[0].value);
    let outputNumber=Number(document.getElementById('output').textContent);
    let manipulateNumber=(outputNumber)?outputNumber:(!inputNumber)?0:inputNumber;
    if(manipulateNumber==0)
    {
        document.getElementsByTagName('input')[0].value=0;
    }
    let result=(button=="Chop")?manipulateNumber/2:(button=="Dice")?Math.sqrt(manipulateNumber):(button=="Spice")?manipulateNumber+=1:
    (button=="Bake")?manipulateNumber*=3:manipulateNumber*=0.8;
    document.getElementById('output').textContent=result;
  
})
})
}