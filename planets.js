//Set up render context
let canvas = document.getElementsByTagName("canvas")[0];
defaultContext = setContext("20px Courier New", canvas);

//Create objects array
let objects = [
    { s:"O", x: 200, y: 20, v: {x:-0.1,y:0}, color:"white", radius:10},
    { s:"Q", x: 30, y: 30, v: {x:0,y:0}, color:"black", radius:10},
    { s:"W", x: 20, y: 40, v: {x:-2,y:-1}, color:"black", radius:10},
    { s:"E", x: 40, y: 50, v: {x:-1.5,y:1}, color:"black", radius:10},
    { s:"R", x: 20, y: 60, v: {x:0.5,y:-0.5}, color:"black", radius:10},
    { s:"T", x: 50, y: 70, v: {x:-0.5,y:1}, color:"black", radius:10},
];

//Movement
function move(index, x, y) {
    objects[index].x += x;
    objects[index].y += y;
    clear();
    frame(objects);
}
//Declare Binds
bind("ArrowUp",     function(){ move(controlIndex,0,-1);});
bind("ArrowDown",   function(){ move(controlIndex,0,1); });
bind("ArrowLeft",   function(){ move(controlIndex,-1,0);});
bind("ArrowRight",  function(){ move(controlIndex,1,0); });
bind("Tab",       function(){ tabThroughObjects(); });

//Control next object in array
let controlIndex = 0;
function tabThroughObjects() {
    event.preventDefault(); //prevent default tab behavior
    objects[controlIndex].color = "black";
    controlIndex++;
    if (controlIndex >= objects.length) { controlIndex = 0; }
    objects[controlIndex].color = "white";
    clear();
    frame(objects);
}

//Render First Frame
frame(objects);