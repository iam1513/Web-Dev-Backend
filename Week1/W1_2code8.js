function sum(num1,num2,fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : "+ data);
}

function displayResultRassive(data){
    console.log("Sum's result is : "+ data);
}

const ans = sum(2,4,displayResult);

// fnToCall (argument) ---> CallBacks