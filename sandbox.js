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

function updateFrame() {
    daub.clear();
    setCollisionColors(objects);
    daub.frame(objects, renderQueue);
}

//Movement
function move(index, x, y) {
    objects[index].x += x;
    objects[index].y += y;

    let renderIndex = getRenderIndex(index);

    updateFrame();
}
//Declare Binds
bind("ArrowUp",    function () { move(controlIndex,  0, -1 ); });
bind("ArrowDown",  function () { move(controlIndex,  0,  1 ); });
bind("ArrowLeft",  function () { move(controlIndex, -1,  0 ); });
bind("ArrowRight", function () { move(controlIndex,  1,  0 ); });
bind("PageUp",     function () { objects[controlIndex].radius += 1; updateFrame(); });
bind("PageDown",   function () { objects[controlIndex].radius -= 1; if (objects[controlIndex].radius < 1) { objects[controlIndex].radius = 1; } updateFrame(); });
bind("Tab",        function () { tabThroughObjects(); updateFrame(); });

//Control next object in array
let controlIndex = 0;
function tabThroughObjects() {
    event.preventDefault(); //prevent default tab behavior
    controlIndex++;
    if (controlIndex >= objects.length) { controlIndex = 0; }
}

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

//Render First Frame
updateFrame();