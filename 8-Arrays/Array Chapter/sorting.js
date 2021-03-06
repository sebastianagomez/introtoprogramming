/* Input: A list of text items, each item on a separate line.
 * Processing:
 * Split the text items into an array.
 * Sort the array.
 * Join the array into a string.
 * Output: The sorted list of text items
 */
function process() {
    // Get the text entered by the user.
    let text = document.getElementById('input').value;
    // Split the text at each new
    // line into an array of strings.
    let list = text.split('\n');
    // Sort the array of strings.
    list.sort();
    // Join the sorted array into a string
    // of text separated by newline characters.
    let output = list.join('\n');
    // Display the string for the user to see.
    document.getElementById('output').value = output;
   }
   