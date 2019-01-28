function solve() {
    let button=document.getElementsByTagName('button')[0];
    button.addEventListener('click',event=>
{
  
    let searchingText=button.previousElementSibling.value;
    let rows=Array.from(document.getElementsByTagName('tbody')[0].getElementsByTagName('tr'));
    for(let row of rows)
    {
        row.removeAttribute('class','select');
        let rowText="";
        let cols= Array.from(row.getElementsByTagName('td'));
        cols.forEach(td=>
            {
                rowText+=td.textContent;              
            });       
        if(rowText.toUpperCase().includes(searchingText.toUpperCase()))
        {
            console.log(rowText);
            row.setAttribute('class','select');
            button.previousElementSibling.value="";
        }
       
    }
 
})
}   
   