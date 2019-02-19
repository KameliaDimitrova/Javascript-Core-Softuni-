function solve(name, age, weight, height)
{
   let patient={};
   patient.name=name;
   patient.personalInfo={};
    patient.personalInfo.age=age;
    patient.personalInfo.weight=weight;
    patient.personalInfo.height=height;
    let BMI=Math.round((weight/(height*height))*10000);
    let status=BMI<18.5?'underweight':BMI<25?'normal':BMI<30?'overweight':'obese';
    patient.BMI=BMI;
    patient.status=status;
    if(status=='obese')
    {
        let recommendation='admission required';
        patient.recommendation=recommendation;
    }
return patient;
}
solve('Peter', 9, 57, 137);