function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumberField = parseInt(caseNumberFieldString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumberField + 1;
    }

    else{
        newCaseNumber = previousCaseNumberField - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}


function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total-price');
    caseTotalElement.innerText = caseTotalPrice;
    return caseTotalPrice;
}




document. getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);
})