function solve() {
     let button=document.getElementsByTagName('button')[0];
     let fatherDiv=document.getElementById('allNumbers');
     console.log(fatherDiv);
     button.addEventListener('click',event=>
     {
        let numbersAsString=button.previousElementSibling.value;
         let numbersArr=[];
         numbersArr=Array.from(new Set(numbersAsString.split(" ")));
         if(numbersArr.length==6&&Math.min.apply(null,numbersArr)>=1&&Math.max.apply(null,numbersArr)<=49)
       {
           for(let i=1;i<=49;i++)
           {
               let newDiv=document.createElement("div");
               newDiv.setAttribute('class','numbers');
               newDiv.textContent=i; 
              
               if(numbersArr.includes(newDiv.textContent))
               {
                newDiv.style.backgroundColor="orange";             
               }
               fatherDiv.appendChild(newDiv);
               let inputField=document.getElementsByTagName('input')[0];
               inputField.disabled=true;
               button.disabled=true;
           }

       }
         console.log(numbersAsString);
         console.log(numbersArr);
     })
   
}