        function doPayment(){
            
            var principal = parseFloat(document.getElementById("amountBorrowed").value);
            var annualRate = parseFloat(document.getElementById("annualInterestRate").value);
            var years = parseFloat(document.getElementById("numberOfYears").value);
            var periodsPerYear = parseFloat(document.getElementById("paymentsPerYear").value);
            
            let result = computePayment(principal, annualRate, years, periodsPerYear);

            document.getElementById("monthlyPayment").value = "$" + Math.round(result *100)/100;
        
        }

        function computePayment(principal, annualRate, years, periodsPerYear) {
            
            return (principal * (annualRate / 12)) / (1 - Math.pow(1 / (1 + annualRate / 12), years * periodsPerYear));
            
        }
        
        function doBalance() {

            var principal = parseFloat(document.getElementById("amountBorrowed").value);
            var annualRate = parseFloat(document.getElementById("annualInterestRate").value);
            var years = parseFloat(document.getElementById("numberOfYears").value);
            var periodsPerYear = parseFloat(document.getElementById("paymentsPerYear").value);
            var numberOfPaymentsPaidToDate = parseFloat(document.getElementById("numberOfPaymentsPaidToDate").value);
            
            let result = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate);
            
            document.getElementById("payOffAmount").value = "$" + Math.round(result *100)/100;

        }

        function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate) {

            let a = principal * Math.pow(1 + (annualRate / 12), numberOfPaymentsPaidToDate);
            let p = computePayment(principal, annualRate, years, periodsPerYear);
            p = p * (Math.pow(1 + (annualRate / 12), numberOfPaymentsPaidToDate) - 1);
            p = p / (annualRate / 12);

            return a - p;
        }