
function getCurrentQuantity(fieldId, isPlusOrNot){
    const quantity_field = document.getElementById(fieldId);
    const quantity_value = parseInt(quantity_field.value);
    
    if(isPlusOrNot){
        quantity_field.value = quantity_value + 1;
    }else if(quantity_value > 0){
        quantity_field.value = quantity_value - 1;
    }else{
        alert("Please don't click on minus when your quantity is 0!!!!!");
    }
}

document.getElementById('phone_plus_btn').addEventListener('click', function () {
    getCurrentQuantity('phone_quantity_field', true);
});

document.getElementById('phone_minus_btn').addEventListener('click', function () {
    getCurrentQuantity('phone_quantity_field', false);
});