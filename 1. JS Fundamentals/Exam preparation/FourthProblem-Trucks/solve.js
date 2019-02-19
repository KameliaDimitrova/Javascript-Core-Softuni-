function solve(arr,command){
let result="";
let currCommand=command.split(' ')[0];
let index=0;
if(currCommand=="sort")
{
    for(let row=0;row<arr.length;row++) {
        for (let col = 0; col < arr[row].length; col++) {
            result += (arr[row][col]);
            if (col < arr.length - 1) {
                result += ' | ';
            }
        }
        result += '\n';
    }
}
else if(currCommand=="hide")
{
    let columnForHide=command.split(' ')[1];
    index=(arr[0].indexOf(columnForHide));
    for(let row=0;row<arr.length;row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if(index!=col)         {
                result += (arr[row][col]);
                if (col < arr.length -2) {

                        result += ' | ';

                }


            }
        }
        result += '\n';

    }
}
else if(currCommand=="filter")
{
    let colProp=command.split(' ')[1];
    let colValue=command.split(' ')[2];
    let colIndex=arr[0].indexOf(colProp);
    let rowIndex=0;
for(let row=0;row<arr[0].length;row++)
{
    let value=arr[row][colIndex];
    if(value==colValue)
        rowIndex=row;
    }
    for(let i=0;i<arr[0].length;i++)
    {
        for (let col = 0; col < arr[0].length; col++) {
            if (i == 0 || i == rowIndex) {
                result += (arr[i][col]);
                if (col < arr.length - 1) {
                    result += ' | ';
                }
                else
                {
                    result += '\n';
                }
            }

    }

    }
}
console.log(result)
}

solve([['firstName', 'age', 'grade', 'course'],
        ['Peter', '25', '5.00', 'JS-Core'],
        ['George', '34', '6.00', 'Tech'],
        ['George', '34', '6.00', 'Ruby'],
        ['Marry', '28', '5.49', 'Ruby']],
    'filter course Ruby')
;

