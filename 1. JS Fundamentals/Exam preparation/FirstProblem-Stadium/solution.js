function solve(arr)
{
    let destination={};
    let country="";
    let town="";
    let price=0;
    for(let i=0;i<arr.length;i++)
    {
        let currTravel=arr[i].split(" > ");
        country=currTravel[0];
        town=(currTravel[1]).charAt(0).toUpperCase() + (currTravel[1]).slice(1);
        price=currTravel[2];
        if(!destination[country])
        {
            destination[country]={};
            destination[country][town]=price;
        }
        else
        {
            if(!destination[country][town]) {
                destination[country][town]=price;
            }
            else
            {
                if(+destination[country][town]>+price)
                {
                    destination[country][town]=price;
                }
            }
        }
    }
    let sortedStates = Object.keys(destination).sort((a, b)=>{
        "use strict";
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    for (let state of sortedStates) {
        console.log(state);
        let innerResult = "";
        innerResult += (state + " -> ");

        let sortedTownsByPrice = Object.keys(destination[state]).sort((t1,t2)=>{
            "use strict";
            return destination[state][t1] - destination[state][t2];
        });

        for (let obj of sortedTownsByPrice) {
            innerResult += (obj + " -> ");
            innerResult += (destination[state][obj]+ " ");
        }

        console.log(innerResult.trim());
    }
}

let arr=["Bulgaria > sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ];

solve(arr);



