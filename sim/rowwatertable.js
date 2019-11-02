var i=0;
var time=0;
var temperature = Math.random(30)*.1+45;
var tb = document.getElementById("tablewater");
function waterrow(){
        console.log(tb);
        i+=1;
        if(i<10){
        var row = tb.insertRow();
        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i;
        var tm = timewater();
        t.value=(tm).toFixed(2);
        cell.appendChild(t);

        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i+i;
        var tempar = temp();
        t.value=(tempar).toFixed(2);
        cell.appendChild(t);

        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i+i+i;
        var logt = logtemp();
        t.value=(logt).toFixed(2);
        cell.appendChild(t);
    }
}
function timewater(){
    time+=15;
    return (time-15);
}
function temp(){
    temperature -= Math.random(30)*.1 + 0.6;
    return temperature;
}
function logtemp(){
    return Math.log(temperature);
}