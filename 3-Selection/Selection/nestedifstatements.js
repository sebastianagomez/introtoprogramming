/* Input: A person's age and the number
 * of games that person has attended
 * Processing: Determine the price to charge
 * that person for a ticket to a game
 * Output: The ticket price
 */
function ticketPrice() {
    let age = parseInt(document.getElementById('ageBox').value);
    let gamesAttended = parseInt(document.getElementById('gamesBox').value);
    let price;
    if (age < 18) {
    if (gamesAttended < 6)
    price = 8.0;
    else if (gamesAttended < 11)
    price = 6.0;
    else
    price = 5.0;
    }
    else if (age < 55) {
    if (gamesAttended < 11)
    price = 10.0;
    else
    price = 8.0;
    }
    else {
    if (gamesAttended < 11)
    price = 8.0;
    else
    price = 6.0;
    }
    document.getElementById('priceDiv').innerHTML = price;
   }