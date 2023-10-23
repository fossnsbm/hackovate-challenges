
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


const gunPriceList = {
    'Assault-Rifle': 1000,
    'Sniper': 2000,
    'Pistol': 50,
    'Shotgun': 1500,
    'Revolver': 500,
    'Mashine-Gun': 2500,
    'RPG': 50,
    'Laser-Gun': 3500
}

const inventoryPriceList = {
    'Medi-Kit': 500,
    'Molotov': 1000,
    'Grenade': 1500,
    'Knife': 2000,
    'Sword': 2500,
    'Armor': 3000,
    'C4': 3500,
    'Land-Mine': 4000
}

const gunTotalElement = document.querySelector('.gun-amount');

function calculateGunTotal() {
    let total = 0;
    selectedGunList.forEach((item) => {
        total += gunPriceList[item.id];
    });
    console.log(total);
    gunTotalElement.innerHTML = total;
}

const inventoryTotalElement = document.querySelector('.inventory-amount');

function calculateInventoryTotal() {
    let total = 0;
    selectedInventoryList.forEach((item) => {
        total += inventoryPriceList[item.id];
    });
    console.log(total);
    inventoryTotalElement.innerHTML = total;
}


