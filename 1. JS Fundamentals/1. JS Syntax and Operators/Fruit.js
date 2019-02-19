function Solve(fruit, fruitGrams, pricePerKg)
{
    let fruitKg=fruitGrams/1000;
    let totalPrice=fruitKg*pricePerKg;
    console.log("I need "+totalPrice.toFixed(2)+" leva to buy "+fruitKg.toFixed(2)+" kilograms "+fruit+".");
}

Solve('orange',2500,1.80);