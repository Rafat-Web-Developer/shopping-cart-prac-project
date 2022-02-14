
function getCurrentQuantity(fieldId, currentTotalPriceFieldId, initialPrice, isPlusOrNot){
    const quantity_field = document.getElementById(fieldId);
    const quantity_value = parseInt(quantity_field.value);
    
    const current_Total_Price_field = document.getElementById(currentTotalPriceFieldId);

    
    if(isPlusOrNot){
        const newQuantity = quantity_value + 1;
        quantity_field.value = newQuantity;
        getIndividualTotalPrice(current_Total_Price_field, initialPrice, newQuantity);
    }else if(quantity_value > 0){
        const newQuantity = quantity_value - 1;
        quantity_field.value = newQuantity;
        getIndividualTotalPrice(current_Total_Price_field, initialPrice, newQuantity);
    }else{
        alert("Please don't click on minus when your quantity is 0!!!!!");
    }

    getTotalPrice();
}

function getIndividualTotalPrice(current_Total_Price_field, initialPrice, newQuantity){
    const new_Total_Price = newQuantity * initialPrice;
    current_Total_Price_field.innerText = new_Total_Price;
}

function getInputValue(fieldId){
    const field = document.getElementById(fieldId);
    const fieldValue = parseInt(field.value);
    return fieldValue;
}

function getTotalPrice(){
    const phoneTotalPrice = getInputValue('phone_quantity_field') * 1000;
    const caseTotalPrice = getInputValue('case_quantity_field') * 50;
    const subTotalField = document.getElementById('sub_total');
    const subTotalPrice = phoneTotalPrice + caseTotalPrice;
    subTotalField.innerText = subTotalPrice;


    const taxField = document.getElementById('tax');
    const tax = subTotalPrice / 10;
    taxField.innerText = tax;

    const totalField = document.getElementById('total');
    const total = subTotalPrice + tax;
    totalField.innerText = total;

}

// //--Phone Increment and Decrement Button--//
document.getElementById('phone_plus_btn').addEventListener('click', function () {
    getCurrentQuantity('phone_quantity_field', 'total_phone_price', 1000, true);
});
document.getElementById('phone_minus_btn').addEventListener('click', function () {
    getCurrentQuantity('phone_quantity_field', 'total_phone_price', 1000, false);
});

// //--Case Increment and Decrement Button--//
document.getElementById('case_plus_btn').addEventListener('click', function () {
    getCurrentQuantity('case_quantity_field', 'total_case_price', 50, true);
});
document.getElementById('case_minus_btn').addEventListener('click', function () {
    getCurrentQuantity('case_quantity_field', 'total_case_price', 50, false);
});

