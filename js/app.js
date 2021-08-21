

function addTotal() {
    totalPrice.innerText = Number(bestPrice.innerText) + Number(memoryPrice.innerText) + Number(storagePrice.innerText) + Number(deliveryPrice.innerText);
    grandTotal.innerText = totalPrice.innerText;


}

function isSelected(element) {

    return element.classList.contains('selected');
}





// memory-part
const memory8GB = document.getElementById('memory-8-GB');
const memory16GB = document.getElementById('memory-16-GB');


//storage-part
const storage256GB = document.getElementById('storage-256-GB');
const storage512GB = document.getElementById('storage-512-GB');
const storage1TB = document.getElementById('storage-1-TB');

//delivery-part
const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');

//calculation part
const bestPrice = document.getElementById('best-price');
const memoryPrice = document.getElementById('memory-cost');
const storagePrice = document.getElementById('storage-cost');
const deliveryPrice = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-cost');
const grandTotal = document.getElementById('grand-total');

//promo-code-part
const proApplyBtn = document.getElementById('promo-apply-btn');
const promoInput = document.getElementById('promo-input');




// ---------event-handeler---------

// memory-event
memory8GB.addEventListener('click', function () {

    //is-selected 
    if (!isSelected(memory8GB)) {
        memory8GB.classList.add('selected');
        memory16GB.classList.remove('selected');


    }
    memoryPrice.innerText = 0;
    addTotal();
});
memory16GB.addEventListener('click', function () {

    //is-selected 
    if (!isSelected(memory16GB)) {
        memory16GB.classList.add('selected');
        memory8GB.classList.remove('selected');


    }
    memoryPrice.innerText = 180;
    addTotal();
});

//storage-event
storage256GB.addEventListener('click', function () {

    //is-selected 
    if (!isSelected(storage256GB)) {
        storage1TB.classList.remove('selected');
        storage512GB.classList.remove('selected');
        storage256GB.classList.add('selected');

    }
    storagePrice.innerText = 0;
    addTotal();

});
storage512GB.addEventListener('click', function () {

    //is-selected 
    if (!isSelected(storage512GB)) {
        storage1TB.classList.remove('selected');
        storage512GB.classList.add('selected');
        storage256GB.classList.remove('selected');

    }

    storagePrice.innerText = 100;
    addTotal();

});
storage1TB.addEventListener('click', function () {

    //is-selected 
    if (!isSelected(storage1TB)) {
        storage1TB.classList.add('selected');
        storage512GB.classList.remove('selected');
        storage256GB.classList.remove('selected');

    }

    storagePrice.innerText = 180;
    addTotal();

});

//delivery-event

freeDelivery.addEventListener('click', function () {

    //is-selected 
    if (!isSelected(freeDelivery)) {
        freeDelivery.classList.add('selected');
        expressDelivery.classList.remove('selected');

    }

    deliveryPrice.innerText = 0;
    addTotal();

});

expressDelivery.addEventListener('click', function () {


    // is-selected
    if (!isSelected(expressDelivery)) {
        freeDelivery.classList.remove('selected');
        expressDelivery.classList.add('selected');

    }

    deliveryPrice.innerText = 20;
    addTotal();

});


//promo-code-event

proApplyBtn.addEventListener('click', function () {
    const promoCode = 'stevekaku';

    //validation-checking
    if (promoInput.value == promoCode) {
        grandTotal.innerText = Number(totalPrice.innerText) - (Number(totalPrice.innerText) * .2);

    }
    else {
        alert(" Sorry ! this promo code doesn't exist");
        addTotal();

    }
    promoInput.value = '';



})



