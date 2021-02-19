function depreciation () {

    let s = document.getElementById("start").value;
    let e = document.getElementById("end").value;
    let m = document.getElementById("month").value;


    let result =  (s - e) / m;

    document.getElementById("output").innerHTML = result;

    }