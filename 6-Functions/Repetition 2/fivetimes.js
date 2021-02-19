function fiveTimes(){
   
    let times;
    let output = "";
    let five = 5;
    let i = 1;            
    do {
        times = five * i;
        output += five + " x " + i + " = " + times + "<br>";
        i++;
    } while (i <= 12)

    document.getElementById('OutputDiv').innerHTML = output;

} 