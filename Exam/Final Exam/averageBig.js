function averageBig () {

    let list = [70, 1010, 950, 2014, 6];
    let index = 1000;

    let result;

    for ( i = 0; i < list.length; i++ ) {

    if (list[i] >= index){

        let milindex = list[i].reduce(averageBig);
        let sumindex = milindex / 2; 
        result = sumindex;

    }

    return result;
    
    }

    document.getElementById('output').innerHTML = result;
}