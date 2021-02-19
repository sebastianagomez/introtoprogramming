/* Input: A boy's age
 * Processing: If statements to choose a group
 * Output: Name of the group
 */
function chooseGroup() {
    let age = parseInt(document.getElementById('age').value);
    let group;
    if (age < 7) {
    group = 'When you are 7 years old, you can become a Tiger Scout.'
    }
    else if (age == 7) {
    group = 'Tiger';
    }
    else if (age == 8) {
    group = 'Wolf';
    }
    else if (age == 9) {
    group = 'Bear';
    }
    else if (age == 10) {
    group = 'Webelos';
    }
    else if (11 <= age && age <= 13) {
    group = 'Boy Scout';
   }
    else if (14 <= age && age <= 20) {
    group = 'Venture';
    }
    else {
    group = 'You are too old to join scouting as a participant.' +
    ' Perhaps you would like to volunteer as a leader.';
    }
    document.getElementById('output').innerHTML = group;
   }