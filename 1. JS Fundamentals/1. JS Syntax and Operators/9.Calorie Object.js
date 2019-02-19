function solve(arrOfString)
{
    let strAsObject={};
    for(let i=0;i<arrOfString.length;i+=2)
    {
        strAsObject[arrOfString[i]]=Number(arrOfString[i+1]);
    }
    console.log(strAsObject);
}
solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);
