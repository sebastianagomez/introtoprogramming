function SleepOrNot (){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    var NewYearsDay = now.getMonth(1) && now.getDate(1);
    var IndependenceDay = now.getMonth(7) && now.getDate(4);
    var ChristmasDay = now.getMonth(11) && now.getDate(25);
    var holiday = (ChristmasDay || NewYearsDay || IndependenceDay)

    if (dayOfWeek == (1||2)||(3||4)||5){
        message = "Get up!";
    }
    else if (holiday == (NewYearsDay || IndependenceDay || ChristmasDay)){
        message = "Sleep in!"
    }
    else{
        message = "Sleep in!"
    }
    
    document.getElementById("outputDiv").innerHTML = message;
}