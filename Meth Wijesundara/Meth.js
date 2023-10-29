
// Retrieving the ID for the pre-selected amount and saving its value to a constant
const gunQuantity = document.getElementById("gunQuantity");

// Retrieve all the buttons by their IDs and put it on an array called 'buttons'
// having IDs for each button is benefitial , especially in Issue #3
const buttons1 = [
document.getElementById("BTN1"),
document.getElementById("BTN2"),
document.getElementById("BTN3"),
document.getElementById("BTN4"),
document.getElementById("BTN5"),
document.getElementById("BTN6"),
document.getElementById("BTN7"),
document.getElementById("BTN8")
];



// Introduce a count to keep track of guns selected
let selectedCount = 0;

// Add a click event listener to each button 

// 'button' is a single/current element of the buttons array which is accesed by "forEach" command.
// classList is used to work with CSS classes with "button" element here.
// selectedCount increases and decreases accordingly.

buttons1.forEach(button => {
button.addEventListener("click", () => {
    if (button.classList.contains("selected")) {
        // If the button is already selected, deselect it
        button.classList.remove("selected");
        selectedCount--;
    } else {
        // If the button is not selected, select it
        button.classList.add("selected");
        selectedCount++;
    }

    // Check if more than the selected quantity of buttons are selected

    // Typically the "select" element inputs are stored as strings so need conversion. 
    // Here, it's converted into a decimal (base=10) and saved on a new constant.
    const selectedQuantity = parseInt(gunQuantity.value, 10);

    // Then, the newly saved constant is compared with the selectedCount
    if (selectedCount > selectedQuantity) {
        alert('Selected gun quantity exceeded!');
        // Deselect the last selected button (the one just clicked)
        button.classList.remove("selected");
        selectedCount--;
    }
});
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = '#FFBF34'; // Change the background color to green on hover
});
button.addEventListener("mouseout", () => {
    if (!button.classList.contains("selected")) {
        button.style.backgroundColor = ''; // Reset the background color on mouse leave if not selected
    }
});
});





