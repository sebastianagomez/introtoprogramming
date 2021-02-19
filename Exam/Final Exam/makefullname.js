function makeFullName () {

    let firstname = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;

    let result = lastname + ", " + firstname ;

    document.getElementById("output").innerHTML = result;

    }