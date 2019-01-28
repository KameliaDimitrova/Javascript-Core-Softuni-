function validate() {        
   let monthGenerator={
    "January":"01", 
    "February":"02", 
    "March":"03",
    "April":"04",
    "May":"05",
    "June":"06",
    "July":"07",
    "August":"08",
    "September":"09",
    "October":"10",
    "November":"11",
    "December":"12"
   }
   let weights=[2, 4, 8, 5, 10, 9, 7, 3, 6];
   let egn=[];
   let productResult=0;
   let button=document.getElementsByTagName('button')[0];
   button.addEventListener('click',event=>{
    let year=document.getElementById('year').value;    
    let regionalCode=document.getElementById('region').value;
    let date=document.getElementById('date').value;
    if(year>=1900&&year<=2100&&regionalCode>=43&&regionalCode<=999&&date)
    {
        egn.push((Number)(year[2]));
        egn.push(Number(year[3]));
    let regionalCode=document.getElementById('region').value;
    let monthOptionMenu=document.getElementById('month'); 
    let month=monthGenerator[monthOptionMenu.options[monthOptionMenu.selectedIndex].value];
    egn.push(Number(month[0]));
    egn.push(Number(month[1]));   
 
    date=(date.length==1)?0+date:date;
    egn.push(Number(date[0]));
    egn.push(Number(date[1]));
    egn.push(Number(regionalCode[0]));
    egn.push(Number(regionalCode[1]));
    let gender=document.querySelector('input[name=gender]:checked').value;
    let genderNum=(gender=="Male")?2:1;  
    egn.push(Number(genderNum));
    for(let i=0;i<9;i++)
    {
        productResult+=weights[i]*egn[i];
    }
    let lastDigit=productResult%11;
    if(lastDigit==10)
    {
        lastDigit=0;
    }
    egn.push(Number(lastDigit));
   document.getElementById('egn').textContent="Your EGN is: "+egn.join('');
   document.getElementById('year').value = '';
   document.getElementById('date').value = '';
   document.getElementById('region').value = '';
   document.getElementById('month').selectedIndex = 0;
   document.getElementById('male').checked = false;
   document.getElementById('female').checked = false;
    }
})
}