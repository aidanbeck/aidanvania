let defaultContext; //Should be accessible by all of Dauber

function setContext(font, canvas) {
    let context = canvas.getContext("2d");
    context.font = font;
    return context;
}

function renderText(string, x, y) {
    defaultContext.fillText(string, x, y);
}

function renderCircle(radius, x, y) {
    defaultContext.beginPath();
    defaultContext.arc(x, y, radius, 0, 2 * Math.PI);
    defaultContext.fill();
}

function clear() {
    defaultContext.clearRect(0, 0, defaultContext.canvas.width, defaultContext.canvas.height);
}

function frame(array, indexes) {
    for (i = 0; i < indexes.length; i++) {
        let object = array[indexes[i]];
        defaultContext.fillStyle = object.color;
        // renderText(object.s, object.x, object.y);
        renderCircle(object.radius, object.x, object.y);
        defaultContext.fillStyle = "black";
    }
}