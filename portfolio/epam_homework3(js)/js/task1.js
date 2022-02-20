// Your code goes here
let initialAmount = prompt('Initial amount:')
if (typeof(initialAmount)==Number || initialAmount >= 1000){
    let numberOfYears = prompt('Number of years:');
    if (typeof(numberOfYears)==Number || numberOfYears >= 1||numberOfYears == Number.isInteger(numberOfYears)){
        let percentage = prompt('Percentage of year:');
        if (typeof(percentage)==Number || percentage < 100){
            let totalAmount = (initialAmount * (1 + (percentage*0.01)) ** numberOfYears);
            let totalProfit = totalAmount - initialAmount
            alert(`Initial amount: ${initialAmount}\nNumber of years: ${numberOfYears}\nPercentage of year: ${percentage}\n\nTotal profit: ${totalProfit.toFixed(2)}\nTotal amount: ${totalAmount.toFixed(2)}`)
        }
        else{
            alert('Invalid input data')
        }
        }
    else{
        alert('Invalid input data')}}
else{
    alert('Invalid input data')}

// if (isNaN(initialAmount)|| initialAmount < 1000){
//     alert('Invalid input data')

// }
// let numberOfYears = prompt('Number of years:');
// if (isNaN(numberOfYears)|| numberOfYears < 1|| numberOfYears !== Number.isInteger(numberOfYears)){
//     alert('Invalid input data')

// }
// let percentage = prompt('Percentage of year');
// if (isNaN(percentage)|| percentage > 100){
//     alert('Invalid input data')

// }
// alert(`Initial amount: ${initialAmount}\nNumber of years: ${numberOfYears}\nPercentage of year: ${percentage}\n\n\nTotal profit: ${totalProfit.toFixed(2)}\nTotal amount: ${totalAmount.toFixed(2)}`)
