const display = document.getElementById("display");

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append values
function appendValue(value) {
    display.value += value;
}

// Function to evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// ** Handle keyboard input **
document.addEventListener("keydown", function (event) {
    const key = event.key;

    switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            appendValue(key); // Add number or decimal
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            appendValue(key);
             // Add operator
             
            break;
        case "Enter":
            calculate(); // Calculate result
            break;
        case "Backspace":
            deleteLast(); // Delete last character
            break;
        case "Escape":
            clearDisplay(); // Clear the display
            break;
            case "+":
        case "=":  // Accept '=' for the plus key without Shift
            appendValue("+"); // Add plus sign (+)
            
              break;
        default:
            break; // Ignore other keys
    }
});
