/* Input: An integer
 * Processing: Determine if the integer is even or odd
 * Output: A message that says the integer is even or odd
 */
function isEven() {
    // Get the user input from a text field and convert it to an integer.
    let text = document.getElementById('inputBox').value;
    let number = parseInt(text);
    // Choose a message.
    let message;
    if ((number % 2) == 0) {
    message = number + " is an even integer";
    }
    else {
    message = number + " is an odd integer";
    }
    // Display the message to the user.
    document.getElementById('output').innerHTML = message;
   }