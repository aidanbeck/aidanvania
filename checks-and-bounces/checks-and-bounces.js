function drawLevelBar(mode) {
    if (mode == 2) {
        defaultContext.fillStyle = "white"; defaultContext.fillRect(25,10,500/2,10);
        defaultContext.fillStyle = "mediumseagreen"; defaultContext.fillRect(25,10,bestAirTime/2,10);
        defaultContext.fillStyle = "darkgreen"; defaultContext.fillRect(25,10,airTime/2,10);
    }
    if (mode == 3) {
        defaultContext.fillStyle = "white"; defaultContext.fillRect(25,10,500/2,10);
        defaultContext.fillStyle = "lightblue"; defaultContext.fillRect(25,10,bestAirTime/2,10);
        defaultContext.fillStyle = "darkblue"; defaultContext.fillRect(25,10,airTime/2,10);
    }
}

function countReds() {
    let reds = 0;
    for (i = 0; i < objects.length; i++) {
        if (objects[i].color == "red") { reds++; }
    }
}

function processAirTime() {
    airTime++;
    if (airTime > bestAirTime) { bestAirTime = airTime; }
    if (airTime == 300 && mode == 0) {
        objects[0].color = "red";
        mode = 1;
        airTime = 0;
    }

    countReds();

    if (mode == 1 && reds == 0) {
        airTime = 0;
        mode = 0;
    }
    if (mode == 1 && reds == 6) {
        mode = 2;
        airTime = 0;
        bestAirTime = 0;
    }

    if (mode == 2 && bestAirTime/50 > 10) {
        mode = 3;
        airTime = 0;
        bestAirTime = 0;
        for (j = 0; j < objects.length; j++) {objects[j].color = "black"; }
        objects[0].color = "red";
    }
    if (mode == 3 && bestAirTime/50 > 10) {
        win();
    }
}

function win() {
    mode = 4;
    objects = [];
    objects[objects.length] = { s:"Y", x: 10, y: -10, v: {x:0,y:0}, color:"darkgreen", radius:10};
    objects[objects.length] = { s:"♟", x: 70, y: -23, v: {x:0,y:0}, color:"black", radius:10},
    objects[objects.length] = { s:"O", x: 30, y: -15, v: {x:0,y:0}, color:"darkgreen", radius:10};
    objects[objects.length] = { s:"U", x: 50, y: -20, v: {x:0,y:0}, color:"darkgreen", radius:10};
    objects[objects.length] = { s:"W", x: 90, y: -25, v: {x:0,y:0}, color:"darkgreen", radius:10};
    objects[objects.length] = { s:"I", x: 110, y: -30, v: {x:0,y:0}, color:"darkgreen", radius:10};
    objects[objects.length] = { s:"N", x: 130, y: -35, v: {x:0,y:0}, color:"darkgreen", radius:10};
    objects[objects.length] = { s:"!", x: 150, y: -40, v: {x:0,y:0}, color:"darkgreen", radius:10};
}