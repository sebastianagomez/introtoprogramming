function discountformula (){

    let a = Number.parseFloat(document.getElementById("input").value);
    let formuladiscount = ((a*-0.10)+a);

    let dayOfWeek = new Date().getDay();
    if (a >= 50 && dayOfWeek == 2 || dayOfWeek == 3) {
    formula = ((formuladiscount*0.06)+formuladiscount)
    } 

    else { 
    formula = ((a * 0.06)+a)
    }

    document.getElementById('outputDiv').innerHTML = "$ "+ formula;
}