function leapYear() {
  let button=document.getElementsByTagName('button')[0];
  button.addEventListener('click',event=>
{
    let year=document.getElementsByTagName('input')[0].value;
    let result=((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))?"Leap Year":"Not Leap Year";
   
    document.getElementsByTagName('h2')[0].textContent=result;
    document.getElementById('year').getElementsByTagName('div')[0].textContent=year;
    document.getElementsByTagName('input')[0].value="";
  
})
}