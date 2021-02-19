function quartoliter () {

    let text = document.getElementById("quartsInputBox").value;

    let quartsInputBox = parseFloat(text);

    let liters = quartsInputBox * 0.94635/1;

    document.getElementById("litersDiv").innerHTML = "Quarts to liter: " + liters;

        
}