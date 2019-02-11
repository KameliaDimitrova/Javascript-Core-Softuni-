function solve() {
  
   let buttons=Array.from(document.getElementsByTagName('button'));
   buttons.forEach(btn=>{
       btn.addEventListener('click',event=>
    {
        let secondaryCommand="";
        let result="";
        let matches=[]; 
        let position=0;
        let input=document.getElementById('input').value;
        let output=document.querySelector("#output p");
        let command=event.target.textContent;    
             
       
        if(command=="Filter")
        {                    
            secondaryCommand=document.getElementById('filterSecondaryCmd').value;
            position=document.getElementById('filterPosition').value;
            switch(secondaryCommand)
            {
                case "uppercase":
                matches=input.match(/[A-Z]/g);
                break;
                case "lowercase":
                matches=input.match(/[a-z]/g);
                break;
                case "nums":
                matches=input.match(/[0-9]/g);
                break
                default: break;
            }
           result=matches[position-1];
          
        }
        else if(command=="Sort")
        {
            secondaryCommand=document.getElementById('sortSecondaryCmd').value;
            position=document.getElementById('sortPosition').value;
            switch(secondaryCommand)
            {
                case "A":
                matches=input.split('').sort();
                break;
                case "Z":
                matches=(input.split('').sort()).reverse();                
                break;
                default: break;
            }        
            result=matches[position-1];         
        }
        else if(command=="Rotate")
        {
            secondaryCommand=document.getElementById('rotateSecondaryCmd').value;
            position=document.getElementById('rotatePosition').value;
          if(secondaryCommand%input.length==0)
          {
              result=input[position-1];          
           
          }
          else
          {
              secondaryCommand%=input.length;
              let m=input.length-secondaryCommand;
              matches=input.slice(m).concat(input.slice(0,m));
              result=matches[position-1];             
          }
        }
        else if(command=="Get")
        {
            position=document.getElementById('getPosition').value;
            result=input[position-1];        
          
        }
       output.textContent+=result;      
      
    })
   })
}