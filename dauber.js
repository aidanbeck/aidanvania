//Should dauber be a class instead? especially with the Context, frame, clear, and stuff?
let DAUBER = {
    
    defaultContext: null,

    setContext(font, canvas) {
        let context = canvas.getContext("2d");
        context.font = font;
        return context;
    },

    circle(radius, color, x, y) {
        this.defaultContext.fillStyle = color;
        this.defaultContext.beginPath();
        this.defaultContext.arc(x, y, radius, 0, 2 * Math.PI);
        this.defaultContext.fill();
    },

    image(image, x, y) {
        this.defaultContext.drawImage(image, x, y);
    },

    text(string, color, x, y) {
        this.defaultContext.fillStyle = color;
        this.defaultContext.fillText(string, x, y);
    },

    clear() {
        let context = this.defaultContext;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    },

    frame(array, indexes) {
        for (i = 0; i < indexes.length; i++) {
            let object = array[indexes[i]];
            object.render();
        }
    }
}