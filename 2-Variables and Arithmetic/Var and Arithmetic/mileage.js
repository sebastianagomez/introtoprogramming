function mileage(){

    let input1 = document.getElementById("begInput").value;
    let input2 = document.getElementById("endInput").value;
    let input3 = document.getElementById("gasolineInput").value;

    let mileage = (input1 - input2)/input3;

    document.getElementById("outputDiv").innerHTML="Average miles per gallon: " + mileage;
  }