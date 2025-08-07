// Nullish coalescing operator example
// ❌ Bad Code 💩 --> Logical OR Operator
function printMessage(text) {
    let message = text;
    if (message == null || message == undefined) {
        message = "Nothing to display";
    }
    console.log(message);
}


// ✅ Good Code 👍
function printMessage(text) {
    console.log(text ?? "Nothing to display");
}

printMessage('Hello');
printMessage(undefined);
printMessage(null); 
printMessage(0); // No argument passed
printMessage(''); // Empty string is valid input