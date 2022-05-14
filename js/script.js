
function expItem(food, rent, cloth) {

    return Number(food) + Number(rent) + Number(cloth);

}




function totalExpAndBalance() {


    // Income 

    const totalIncome = document.getElementById('income');
    const incomeAmount = parseFloat(totalIncome.value);

    //warning
    const warning = document.getElementById('type-amount');

    //exp Items

    const foodExp = document.getElementById('food-exp');
    const foodExpAmount = parseFloat(foodExp.value);

    const rentExp = document.getElementById('rent-exp');
    const rentExpAmount = parseFloat(rentExp.value);

    const clothExp = document.getElementById('cloth-exp');
    const clothExpAmount = parseFloat(clothExp.value);



    // Total Exp

    const totalExpAmount = expItem(foodExpAmount, rentExpAmount, clothExpAmount);
    const totalExp = document.getElementById('total-exp');
    totalExp.innerText = totalExpAmount;



    // total Balance Amount

    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = parseFloat(incomeAmount - totalExpAmount);


    //Error Check

    if (isNaN(incomeAmount, foodExpAmount, rentExpAmount, clothExpAmount)) {

        warning.style.display = 'block';
        totalExp.innerText = '';
        totalBalance.innerText = '';
    }
    else {

    }



};



function savingField(totalBalance) {

    const saveInput = document.getElementById('save-input');
    saveInputAmount = parseFloat(saveInput.value);

    //saving amount

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totalBalance.innerText;

    // console.log(savingAmount.innerText);


    const remainingInput = document.getElementById('remaining-balance');
    remainingInput.innerText = totalBalance.innerText;

};












// event click calculate btn

document.getElementById('calculate-btn').addEventListener('click', function () {

    totalExpAndBalance();

});

// event click save  btn 

document.getElementById('save-btn').addEventListener('click', function () {

    savingField(totalExpAndBalance);
    totalExpAndBalance()



});


