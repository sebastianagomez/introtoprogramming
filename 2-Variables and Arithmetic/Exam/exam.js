function computeVolume(){
    
    let a = Number.parseFloat(document.getElementById("inner").value);
    let b = Number.parseFloat(document.getElementById("outer").value);

    let v = ((Math.PI**2)*((a+b)*(a-b)**2))/4;

    document.getElementById("volume").innerHTML=v;

}