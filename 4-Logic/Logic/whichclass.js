/* Input: A girl's age
 * Processing: If statements to choose a class
 * Output: Name of the class
 */
function chooseClass() {
    let age = parseInt(document.getElementById('age').value);
    let group;
    if (age <= 11) {
    group = 'Primary';
    }
    else if (age == 12 || age == 13) {
    group = 'Beehive';
    }
    else if (age == 14 || age == 15) {
    group = 'Mia Maid';
    }
    else if (age == 16 || age == 17) {
    group = 'Laurel';
    }
    else {
    group = 'Relief Society';
    }
    document.getElementById('output').innerHTML = group;
   }