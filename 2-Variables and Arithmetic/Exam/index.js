function computeRateOfChange(){

    let input1 = document.getElementById("prevPrice").value;
    let input2 = document.getElementById("currPrice").value;

    let ratechange = (input2 - input1)/input1;

    document.getElementById("rate").innerHTML=ratechange;

}