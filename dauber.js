let defaultContext; //Should be accessible by all of Dauber

function setContext(font, canvas) {
    let context = canvas.getContext("2d");
    context.font = font;
    return context;
}

function renderText(string, x, y) {
    defaultContext.fillText(string, x, y);
}

function clear() {
    defaultContext.clearRect(0, 0, defaultContext.canvas.width, defaultContext.canvas.height);
}

function frame(array) {
    let focus = objects[0];

    // defaultContext.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < array.length; i++) {
        let object = array[i];
        // renderText(object.s, object.x - focus.x + 150, object.y);

        defaultContext.fillStyle = object.color;
        renderText(object.s, object.x, object.y);
        defaultContext.fillStyle = "black";
    }
}