/* Input:
 * An amount to invest: balance
 * The annual rate of growth: annualRate
 * The number of months to invest: numMonths
 * Processing: Use a loop to compute the balance of an account after
 * a bank has paid interest for numMonths number of months.
 * Output: The balance after numMonths have passed.
 */
function futureValue() {
    let balance = parseFloat(document.getElementById('balance').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let numMonths = parseInt(document.getElementById('months').value);
    let monthlyRate = annualRate / 12;
    // For each month, compute the interest and add it to the balance.
    for (let month = 1; month <= numMonths; month++) {
    // Compute the interest for a month.
    let interest = balance * monthlyRate;
    // Round the interest to pennies.
    interest = Math.round(interest * 100) / 100;
    // Add the interest to the balance.
    balance += interest;
    }
    // Display the resulting balance for the user to see.
    document.getElementById('output').innerHTML =
    'Your balance after ' + numMonths + ' months will be $' + balance;
   }
   