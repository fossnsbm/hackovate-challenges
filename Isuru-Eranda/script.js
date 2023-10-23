
const gunQuantity = document.querySelector('#gun-quantity');
const gunList = document.querySelector('.gun-list');

const gunItems = gunList.querySelectorAll('li');

console.log(gunItems);

const selectedGunList = [];

gunItems.forEach((item) => {
    item.addEventListener('click', () => {

        if (gunQuantity.value == 0) {
            alert('Please select a quantity of guns.');
            return;
        }
        console.log(item);
        if (selectedGunList.includes(item)) {
            item.classList.remove('selected');
            selectedGunList.splice(selectedGunList.indexOf(item), 1);
        } else {
            if (selectedGunList.length >= gunQuantity.value) {
                alert('You can only select up to ' + gunQuantity.value + ' guns.');
                return;
            }
            item.classList.add('selected');
            selectedGunList.push(item);
        }

        calculateGunTotal();
    });
});

const inventoryQuantity = document.querySelector('#inventory-quantity');
const inventoryList = document.querySelector('.inventory-list');

const inventoryItems = inventoryList.querySelectorAll('li');

const selectedInventoryList = [];

inventoryItems.forEach((item) => {
    item.addEventListener('click', () => {

        if (inventoryQuantity.value == 0) {
            alert('Please select a quantity of inventory.');
            return;
        }
        console.log(item);
        if (selectedInventoryList.includes(item)) {
            item.classList.remove('selected');
            selectedInventoryList.splice(selectedInventoryList.indexOf(item), 1);
        } else {
            if (selectedInventoryList.length >= inventoryQuantity.value) {
                alert('You can only select up to ' + inventoryQuantity.value + ' inventory.');
                return;
            }
            item.classList.add('selected');
            selectedInventoryList.push(item);
        }
        calculateInventoryTotal();

    });
}
);


const buyBtn = document.querySelector('.buy-btn');


buyBtn.addEventListener('click', () => {
    if (gunQuantity.value > selectedGunList.length) {
        alert('Please select ' + gunQuantity.value + ' guns.');
        return;
    }
    if (inventoryQuantity.value > selectedInventoryList.length) {
        alert('Please select ' + inventoryQuantity.value + ' inventory.');
        return;
    }

    let total = 0;
    selectedGunList.forEach((item) => {
        total += gunPriceList[item.id];
    });
    selectedInventoryList.forEach((item) => {
        total += inventoryPriceList[item.id];
    });

    document.querySelector('.popup-wrapper').style.display = 'flex';
    document.querySelector('.sub-total').innerHTML = total;

});

