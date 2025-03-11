// Step 1: Remove the <main> element with id="main"
const main = document.getElementById("main");
main.remove();

// Step 2: Create an <h1> element and assign it to newHeader
const newHeader = document.createElement("h1");

// Step 3: Set the id of the <h1> to "victory"
newHeader.id = "victory";

// Step 4: Set the text content of the <h1> to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Step 5: Add the <h1> to the DOM (append to body)
document.body.append(newHeader);