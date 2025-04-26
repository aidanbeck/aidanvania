class Entity {
    constructor(x, y, v = {x:0, y:0}) {
        this.x = x;
        this.y = y;
        this.v = v;
    }
}

class Sprite extends Entity {
    constructor(image, x, y, v) {
        super(x,y,v);
        this.image = image;
        
    }
    
    render() {
        DAUBER.image(this.image, this.x, this.y);
    }
}

class Circle extends Entity {
    constructor(radius, color, x, y, v) {
        super(x,y,v);
        this.radius = radius;
        this.color = color;
        
    }

    render() {
        DAUBER.circle(this.radius, this.color, this.x, this.y);
    }
}

class Runes extends Entity {
    constructor(string, color, x, y, v) {
        super(x,y,v);
        this.string = string;
        this.color = color;
        
    }

    render() {
        DAUBER.text(this.string, this.color, this.x, this.y);
    }
}