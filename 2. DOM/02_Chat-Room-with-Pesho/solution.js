function solve() {
   let buttons=Array.from(document.getElementsByTagName('button'));
   let inputFields=Array.from(document.getElementsByTagName('input'));

   buttons.forEach((btn)=>{
       btn.addEventListener('click',function(event)
    {
        let divElement=document.createElement('div');
        let spanElement=document.createElement('span');
        let pElement=document.createElement('p');
        let senderButton=event.target.name;
        if(senderButton==="myBtn")
        {
            spanElement.textContent="Me";
            pElement.textContent=document.getElementById("myChatBox").value;
        }
        else if(senderButton="peshoBtn")
        {
            spanElement.textContent="Pesho";
            pElement.textContent=document.getElementById("peshoChatBox").value;
        }
        divElement.appendChild(spanElement);
        divElement.appendChild(pElement);
        senderButton==="myBtn"?divElement.style.textAlign='left':divElement.style='right';
document.getElementById("chatChronology").appendChild(divElement);
inputFields[0].value="";
inputFields[1].value="";
    })
   })
}