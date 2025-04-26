class Sprite {
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;
    }
    
    render() {
        DAUBER.image(this.image, this.x, this.y);
    }
}

class Circle {
    constructor(radius, color, x, y) {
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    render() {
        DAUBER.circle(this.radius, this.color, this.x, this.y);
    }
}

class Runes {
    constructor(string, color, x, y) {
        this.string = string;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    render() {
        DAUBER.text(this.string, this.color, this.x, this.y);
    }
}