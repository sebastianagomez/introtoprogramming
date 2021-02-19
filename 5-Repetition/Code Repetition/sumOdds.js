function sumOdds(){

    let inputNumber = parseInt(document.getElementById('integerInput').value);
    let sum = 0;
    for (i = 1 ;  i <= inputNumber;  i+=2) {
        sum += i
    }

    let message = 'The sum is: ' + sum;

    document.getElementById('OutputDiv').innerHTML = message;
}