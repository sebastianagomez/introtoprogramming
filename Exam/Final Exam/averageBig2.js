function Average () {

    let list = [70, 1010, 950, 2014, 6];
    let score = averageBig(list);

    document.getElementById('output').innerHTML = score;

}

function averageBig (list) {

    let Sum = 0;

    for (i = 0; i < list.length; i++) {
        
        if (list[i] >= 1000){

        Sum += list[i] / 2;

        }
        
    }
    return Sum;
}