function mathQuiz(){
    let n1 = parseFloat(document.getElementById("fN").value);
    let n2 = parseFloat(document.getElementById("sN").value);
    let op = document.getElementById("oP").value;
    let answer = parseFloat(document.getElementById("answer").value);

    let result;
    let message;

    if (op == "-" ) {
        let result = n1 - n2;   
    } else if (op == "+"){
        let result = n1 + n2;
    } else if (op == "/"){
        let result = n1 / n2;
    } else if (op == "*"){
        let result = n1 * n2;
    }

    if (result == answer){
        message = "Good job! This is the correct answer!";

    }else {
        message = "You are close! But this is not the correct answer.";
    }
    document.getElementById("result").innerHTML= message;

}