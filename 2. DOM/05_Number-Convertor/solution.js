function solve() {
    let menuTo=document.getElementById('selectMenuTo');
    let binaryOption=menuTo.querySelector('option');
    binaryOption.value="binary";
    binaryOption.textContent="Binary";
    let hexOption=document.createElement("option");
    hexOption.value="hexadecimal";
    hexOption.textContent="Hexadecimal";
    menuTo.appendChild(hexOption);
    let resultInput=document.getElementById('result');
  
    let button=document.getElementsByTagName('button')[0];
        let toBinary=menuTo.querySelectorAll('option')[0];  
      button.addEventListener('click',()=>
      {
        let inputNumber=document.getElementsByTagName('input')[0].value;
       
      if(toBinary.selected)
      {
         let result=parseInt(inputNumber,10).toString(2);         
        resultInput.value=result;
        
      }
      else
      {
        let result=parseInt(inputNumber,10).toString(16).toUpperCase();
        resultInput.value=result;
      }} )       
    
}