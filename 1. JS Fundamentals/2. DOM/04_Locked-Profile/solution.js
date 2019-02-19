function solve() {
   let buttons=Array.from(document.getElementsByTagName('button'));
   let profiles=Array.from(document.querySelectorAll('.profile')); 
   let userNumber=5;
   buttons.forEach((btn)=>{
       btn.addEventListener('click',function(event)
    {
        if(event.target==buttons[0])
        {
            userNumber=0;
        }
        else if(event.target==buttons[1])
        {
            userNumber=1;
        }
        else if(event.target==buttons[2])
        {
            userNumber=2;
        }    
        
        if(event.target.textContent=="Show more")
       {
           ShowInformation();
       }   
        else
    {
        HideInformation();
    }
    function ShowInformation()
    {
     let profile=profiles[userNumber];
     let lockInput=profile.querySelector('input');
     if(!lockInput.checked)
     {
        let information=profile.querySelectorAll('div')[1];
        information.style.display="block";
        event.target.textContent="Hide it";
     }
    }
    function HideInformation()
    {
     let profile=profiles[userNumber];
     let lockInput=profile.querySelector('input');
     if(!lockInput.checked)
     {
     let information=profile.querySelectorAll('div')[1];
     information.style.display="none";
     event.target.textContent="Show more";
     }
    }
    })
   })
 
} 