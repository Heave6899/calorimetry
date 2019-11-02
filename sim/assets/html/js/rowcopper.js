var i=0;
var time=0;
var temperature;
datax=[];
datav=[];
datay1=[];
datay2=[];
var html;
var tb = document.getElementById("tablecopper");
function copperrow(){
        console.log(tb);
        i+=1;
        if(i<11){
        var row = tb.insertRow();
        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i;
        t.size = "10";
        var tm = timewater();
        t.value=(tm).toFixed(2);
        cell.appendChild(t);

        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i+i;
        t.size = "10";
        var tempar = temp();
        t.value=(tempar).toFixed(4);
        cell.appendChild(t);

        var cell = row.insertCell();
        var t = document.createElement("input");
        t.type = "text";
        t.id = "t" + i+i+i;
        t.size = "10";
        var logt = logtemp();
        t.value=(logt).toFixed(4);
        cell.appendChild(t);
        if(i==10)
        {
        document.getElementById("graphcpr").style.visibility = "visible";
        }
    }
    
}
function start(){
    setInterval(timew,1000);
    document.getElementById("starter").hidden="true";
}
function timew(){
    time+=5;
}
function timewater(){
    return time;
}
function temp(){
    temperature = -0.005338*time+46.89871795;
    return -0.005338*time+46.89871795
}
function logtemp(){
    return Math.log(temperature);
}
function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}
function getdatapoints(){
    for(var j=1;j<tb.rows.length;j++)
    {
        var x0=parseFloat(document.getElementById("t"+j).value);
        var y0=parseFloat(document.getElementById("t"+j+j+j).value);
        datav.push({x: x0,y: y0});
        //datax.push(x0);
        //datay1.push(y0);
        //var y1=parseFloat(document.getElementById("t"+j+j+j).value);
        //datav.push({x: x0, y: y1});
        //datay2.push(y1);
    }
    graphline("l1", datav, "Time(s)", "ln(T)");
}
