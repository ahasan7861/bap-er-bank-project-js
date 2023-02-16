
function upadtePhoneNumber(isIncrease){
    const phoneNumberFieldPlus = document.getElementById('phone-number-field');
    const phoneNumberFieldPlusString = phoneNumberFieldPlus.value;
    const previousPhoneNumberPlus = parseInt(phoneNumberFieldPlusString);

    let newPhoneNumberPlus;

    if(isIncrease === true){
        newPhoneNumberPlus = previousPhoneNumberPlus + 1;
    }

    else{
        newPhoneNumberPlus = previousPhoneNumberPlus - 1;
    }
    
    phoneNumberFieldPlus.value = newPhoneNumberPlus;
    return newPhoneNumberPlus;
}


function updatePhoneTotalPrice(newPhoneNumberPlus){
     const phoneTotalPrice = newPhoneNumberPlus * 1219;
    const phoneTotalElement = document.getElementById('phone-total-price');
    phoneTotalElement.innerText = phoneTotalPrice;

}

function getElementValueById(elementId){
    const phoneTotalElement = document.getElementValueById('elementId');
      const currentPhoneTotalString = phoneTotalElement.innerText;
      const currentPhoneTotal = parseInt(currentPhoneTotalString);
      return currentPhoneTotal;
}




document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumberPlus = upadtePhoneNumber(true);

      updatePhoneTotalPrice(newPhoneNumberPlus);
    //   const phoneTotalElement = document.getElementById('phone-total-price');
    //   const currentPhoneTotalString = phoneTotalElement.innerText;
    //   const currentPhoneTotal = parseInt(currentPhoneTotalString);

    const currentPhoneTotal = getElementValueById('phone-total-price');
    const currentCaseTotal = getElementValueById('case-total-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumberPlus = upadtePhoneNumber(false);

       updatePhoneTotalPrice(newPhoneNumberPlus);
})

