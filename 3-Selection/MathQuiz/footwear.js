function myFootWear() {
    var weather = document.getElementById('weatherType').value;
    var message;
    if(weather == "hot") {
    message = 'Sandals';
    }
    else if(weather == "rain") {
    message = 'Galoshes';
    }
    else if(weather == "snow") {
    message = 'Boots';
    }
    else{
    message = 'Shoes';
    }
    let div = document.getElementById('footWearDiv');
    div.innerHTML = "Your footwear for today is:" + message;
}