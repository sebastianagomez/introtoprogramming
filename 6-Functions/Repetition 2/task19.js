/* Input:
 * Processing:
 * Output:
 */

function task19(){
        
    let x = Number.parseFloat(document.getElementById("one").value);
    let y = Number.parseFloat(document.getElementById("two").value);

    if (x > 5 && y > 5) {
        message = "True";
    }
    else if (x + y > 20) {
        message = "True";    
    }
    else {
        message = "False"
    }

    document.getElementById('output').innerHTML = message;
}
