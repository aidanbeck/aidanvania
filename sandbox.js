//Set up render context
let canvas = document.getElementsByTagName("canvas")[0];
let daub = new Dauber(canvas);

//Define image
const playerImage = new Image();
playerImage.src = 'zev.bmp';

let objects = [
    new Sprite(playerImage, 20, 20),
    new Circle(10, "white", 30, 30),
    new Runes("T", "green", 50, 50),
    new Lattice(3,3,0,0)
]

objects[3].setCell(0,0, {image: playerImage});
objects[3].setCell(1,1, {image: playerImage});
objects[3].setCell(2,2, {image: playerImage});

let renderQueue = [0, 1, 2, 3];

function getRenderIndex(mainIndex) {
    for (i = 0; i < renderQueue.length; i++) {
        if (mainIndex == renderQueue[i]) {
            return i;
        }
    }
}

setInterval(function() {
            
    daub.clear();
    setCollisionColors(objects);

    for (object of objects) {
        velocity(object);
        friction(object);
    }

    daub.frame(objects, renderQueue);

}, 20);

//Movement
function move(index, x, y) {
    objects[index].v.x += x*2;
    objects[index].v.y += y*2;

    let renderIndex = getRenderIndex(index);
}


//Control next object in array
let controlIndex = 0;
function tabThroughObjects() {
    event.preventDefault(); //prevent default tab behavior
    controlIndex++;
    if (controlIndex >= objects.length) { controlIndex = 0; }
}

//Declare Binds
new Bind("ArrowUp",   () => move(controlIndex,  0, -1 ) );
new Bind("ArrowDown", () => move(controlIndex,  0,  1 ) );
new Bind("ArrowLeft", () => move(controlIndex, -1,  0 ) );
new Bind("ArrowRight",() => move(controlIndex,  1,  0 ) );
new Bind("PageUp",    () => objects[controlIndex].radius += 1 );
new Bind("PageDown",  () =>{objects[controlIndex].radius -= 1; if (objects[controlIndex].radius < 1) { objects[controlIndex].radius = 1; }} );
new Bind("Tab",             tabThroughObjects );

//Color overlapping objects, and color controllable object.
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