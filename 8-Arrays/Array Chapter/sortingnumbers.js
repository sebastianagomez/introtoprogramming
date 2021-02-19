/* Input: No user input
 * Processing: Test the built-in JavaScript sort function
 * Output: The contents of an array before it is
 * sorted, and the contents after it is sorted.
 */
function testSort() {
    let numbers = [ 7, 10, 8, 16, 3, 35 ];
    document.getElementById('output').innerHTML = numbers + '<br>';
    numbers.sort(compareNumbers);
    document.getElementById('output').innerHTML += numbers;
   }
   // Compares two numbers by subtracting the second
   // from the first which will return a negative
   // number if the first number should be placed
   // before the second, a zero if the two numbers
   // are equal, and a positive number if the first
   // number should be placed after the second.
   function compareNumbers(x, y) {
    return x - y;
   }
   