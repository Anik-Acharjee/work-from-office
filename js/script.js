//Income 

document.getElementById('calculate-btn').addEventListener('click', function () {

    const totalIncome = document.getElementById('income');
    const incomeAmount = parseFloat(totalIncome.value);


    // // totalIncome.value = '';



    const foodExp = document.getElementById('food-exp');
    const foodExpAmount = parseFloat(foodExp.value);

    const rentExp = document.getElementById('rent-exp');
    const rentExpAmount = parseFloat(rentExp.value);

    const clothExp = document.getElementById('cloth-exp');
    const clothExpAmount = parseFloat(clothExp.value);

    // Total Exp


    const totalExpAmount = foodExpAmount + rentExpAmount + clothExpAmount;

    const totalExp = document.getElementById('total-exp');
    const totalExpText = totalExp.innerText;

    totalExp.innerText = totalExpAmount;




    // total Balance Amount


    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    totalBalance.innerText = incomeAmount - totalExpAmount;











    // const inputFeild = document.getElementById('clear-btn');
    // inputFeild.addEventListener('click', () {
    //     foodExp.value = '';
    //     rentExp.value = '';
    //     clothExp.value = '';

    // })

    // console.log(inputFeild);

})


document.getElementById('save-btn').addEventListener('click', function () {


    const saveInput = document.getElementById('save-input');
    const savePercent = parseFloat(saveInput.value);


    //savein amount

    const savingAmount = document.getElementById('saving-amount');
    const saveAmountText = savingAmount.innerText;
    const totalSavingAmount = incomeAmount / savePercent;

    savingAmount.innerText = saveAmountText;



    console.log(totalSavingAmount);
});



function doubleIt(num) {
    const result = num * 3;
    return result;
}


const five = doubleIt(5);
const two = doubleIt(2);

console.log(five, two);