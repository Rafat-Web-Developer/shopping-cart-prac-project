
function getCurrentQuantity(fieldId, currentTotalPriceFieldId, initialPrice, isPlusOrNot){
    const quantity_field = document.getElementById(fieldId);
    const quantity_value = parseInt(quantity_field.value);
    
    const current_Total_Price_field = document.getElementById(currentTotalPriceFieldId);

    
    if(isPlusOrNot){
        const newQuantity = quantity_value + 1;
        quantity_field.value = newQuantity;
        const current_Total_Price = newQuantity * initialPrice;
        current_Total_Price_field.innerText = current_Total_Price;
    }else if(quantity_value > 0){
        const newQuantity = quantity_value - 1;
        quantity_field.value = newQuantity;
        const current_Total_Price = newQuantity * initialPrice;
        current_Total_Price_field.innerText = current_Total_Price;
    }else{
        alert("Please don't click on minus when your quantity is 0!!!!!");
    }
}

// //--Phone Increment and Decrement Button--//
document.getElementById('phone_plus_btn').addEventListener('click', function () {
    getCurrentQuantity('phone_quantity_field', 'total_phone_price', 1219, true);
});
document.getElementById('phone_minus_btn').addEventListener('click', function () {
    getCurrentQuantity('phone_quantity_field', 'total_phone_price', 1219, false);
});

// //--Case Increment and Decrement Button--//
document.getElementById('case_plus_btn').addEventListener('click', function () {
    getCurrentQuantity('case_quantity_field', 'total_case_price', 59, true);
});
document.getElementById('case_minus_btn').addEventListener('click', function () {
    getCurrentQuantity('case_quantity_field', 'total_case_price', 59, false);
});

