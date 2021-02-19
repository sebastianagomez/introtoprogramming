
/* Defining Table
 * Input: no user input
 * Processing: Test the addEnds and getMiddle functions by calling them.
 * Output: The values returned from the addEnds and getMiddle functions.
 */

function test() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];

    // Test the addEnds function by calling it two times.

    let sum1 = addEnds(list1);
    let sum2 = addEnds(list2);

    // Test the getMiddle function by calling it two times.

    let mid1 = getMiddle(list1);
    let mid2 = getMiddle(list2);

    // Build a string to display to the user.

    let output =
            sum1 + '<br>' +
            sum2 + '<br>' +
            mid1 + '<br>' +
            mid2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;

    function addEnds(list) {
        let result = list[0] + list[list.length - 1];
        return result;
        }

        
    function getMiddle(list){
        let result;
       
    
        if (list.length % 2 != 0) {
        result = list[(list.length - 1) / 2];
        } 
        else if (list.length % 2 == 0) {
        let midIndex = (list.length / 2);
        let midNumLeft = midIndex - 1;
        let midNumRigth = midIndex;
        let average = (list[midNumLeft] + list[midNumRigth]) / 2;
        result = average;
        }
        return result;
        }
}
