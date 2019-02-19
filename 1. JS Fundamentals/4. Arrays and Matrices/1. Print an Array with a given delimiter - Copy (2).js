function printArrayWithDelimiter(arrayAsJson)
{
  let delimiter=arrayAsJson[arrayAsJson.length-1];
    console.log((arrayAsJson.slice(0,arrayAsJson.length-1)).join(delimiter));
}
(printArrayWithDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
))