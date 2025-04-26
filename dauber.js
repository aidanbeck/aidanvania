let DAUBER = {
    
    defaultContext: null, //Should be accessible by all of Dauber

    setContext(font, canvas) {
        let context = canvas.getContext("2d");
        context.font = font;
        return context;
    },

    text(string, x, y) {
        this.defaultContext.fillText(string, x, y);
    },

    circle(radius, x, y) {
        this.defaultContext.beginPath();
        this.defaultContext.arc(x, y, radius, 0, 2 * Math.PI);
        this.defaultContext.fill();
    },

    image(image, x, y) {
        this.defaultContext.drawImage(image, x, y);
    },

    clear() {
        let context = this.defaultContext;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    },

    frame(array, indexes) {
        for (i = 0; i < indexes.length; i++) {
            let object = array[indexes[i]];
            this.defaultContext.fillStyle = object.color;
            // this.text(object.s, object.x, object.y);
            // this.circle(object.radius, object.x, object.y);
            this.image(object.image, object.x, object.y);
            this.defaultContext.fillStyle = "black";
        }
    }
}