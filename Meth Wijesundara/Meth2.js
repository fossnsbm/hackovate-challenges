const inventQuantity = document.getElementById("inventQuantity");

const buttons2 = [
    document.getElementById("BTN9"),
    document.getElementById("BTN10"),
    document.getElementById("BTN11"),
    document.getElementById("BTN12"),
    document.getElementById("BTN13"),
    document.getElementById("BTN14"),
    document.getElementById("BTN15"),
    document.getElementById("BTN16")
    ];





buttons2.forEach(button => {
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
        const selectedQuantity = parseInt(inventQuantity.value, 10);
    
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
