function mathPow(){
   
    let times;
    let output = "";
    let power = 2;
    let i = 0;            
    do  {
        times = Math.pow(2, i);
        output += + i + ") " + times + "</br>";
        i++;
    } while (i <= 31)

    document.getElementById('OutputDiv').innerHTML = output;

}  