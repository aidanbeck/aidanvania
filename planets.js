//Set up render context
let canvas = document.getElementsByTagName("canvas")[0];
defaultContext = setContext("20px Courier New", canvas);

//Create objects array
let objects = [
    { s:" ", x: 200, y: 20, v: {x:-0.1,y:0}, color:"white", radius:10},
    { s:"Q", x: 30, y: 30, v: {x:0,y:0}, color:"black", radius:10},
    { s:"W", x: 20, y: 40, v: {x:-2,y:-1}, color:"black", radius:10},
    { s:"E", x: 40, y: 50, v: {x:-1.5,y:1}, color:"black", radius:10},
    { s:"R", x: 20, y: 60, v: {x:0.5,y:-0.5}, color:"black", radius:10},
    { s:"T", x: 50, y: 70, v: {x:-0.5,y:1}, color:"black", radius:10},
];

function updateFrame() {
    clear();
    setCollisionColors(objects);
    frame(objects);
}

//Movement
function move(index, x, y) {
    objects[index].x += x;
    objects[index].y += y;
    updateFrame();
}
//Declare Binds
bind("ArrowUp",     function(){ move(controlIndex,0,-1);});
bind("ArrowDown",   function(){ move(controlIndex,0,1); });
bind("ArrowLeft",   function(){ move(controlIndex,-1,0);});
bind("ArrowRight",  function(){ move(controlIndex,1,0); });
bind("PageUp",      function(){ objects[controlIndex].radius += 1; updateFrame();});
bind("PageDown",      function(){ objects[controlIndex].radius -= 1; updateFrame();});
bind("Tab",       function(){ tabThroughObjects(); updateFrame(); });

//Control next object in array
let controlIndex = 0;
function tabThroughObjects() {
    event.preventDefault(); //prevent default tab behavior
    controlIndex++;
    if (controlIndex >= objects.length) { controlIndex = 0; }    
}

//
function setCollisionColors(objects) {
    let collisions = getCollisions(objects);
    for (i = 0; i < objects.length; i++) {
        objects[i].color = "black"
    }
    for (i = 0; i < collisions.length; i++) {
        objects[collisions[i][0]].color = "steelblue";
        objects[collisions[i][1]].color = "steelblue";
    }
    if (objects[controlIndex].color == "steelblue") {
        objects[controlIndex].color = "lightsteelblue";
    } else {
        objects[controlIndex].color = "white";
    }
}

//Render First Frame
updateFrame();