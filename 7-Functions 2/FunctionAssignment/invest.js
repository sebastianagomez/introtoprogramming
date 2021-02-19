function doFV() {

    var principal = parseFloat(document.getElementById("amountBorrowed").value);
    var annualRate = parseFloat(document.getElementById("annualInterestRate").value);
    var years = parseFloat(document.getElementById("numberOfYears").value);
    var periodsPerYear = parseFloat(document.getElementById("paymentsPerYear").value);
    
    let result = computeFutureValue (principal, annualRate, years, periodsPerYear);

    document.getElementById("outputDiv").innerHTML = "$" + Math.round(result *100)/100;

}

function computeFutureValue (principal, annualRate, years, periodsPerYear) {

    let formulainvest = principal * (1 + (annualRate / periodsPerYear)) ** (years * periodsPerYear);
    return formulainvest;
}