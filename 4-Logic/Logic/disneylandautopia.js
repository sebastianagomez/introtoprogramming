/* Input: the height of a driver and an optional passenger
 * Processing: Determine if a driver and
 * optional passenger may ride the Autopia
 * Output: "Enjoy the ride!" or
 * "Sorry, to drive a car on the Autopia you must be
 * at least 54 inches tall or at least 32 inches tall and
 * accompanied by a passenger who is at least 54 inches tall."
 */
function checkHeight() {
    let driver = parseInt(document.getElementById('driverBox').value);
    let passenger = parseInt(document.getElementById('passengerBox').value);
    let message;
    if (driver >= 54 || (driver >= 32 && passenger >= 54)) {
    message = 'Enjoy the ride!';
    }
    else {
    message = 'Sorry, to drive a car on the Autopia you must be ' +
    'at least 54 inches tall or at least 32 inches tall and ' +
    'accompanied by a passenger who is at least 54 inches tall.';
    }
   
   }