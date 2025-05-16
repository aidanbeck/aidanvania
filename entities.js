// Eventually, other entities can extend this as a baseline
class Entity {
    constructor(x, y, v = {x:0, y:0}) {
        this.x = x;
        this.y = y;
        this.v = v;
    }
}

class Sprite {
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;
    }

    render(dauber) {
        dauber.image(this.image, this.x, this.y);
    }
}

class Circle {
    constructor(radius, color, x, y) {
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    render(dauber) {
        dauber.circle(this.radius, this.color, this.x, this.y);
    }
}

class Runes {
    constructor(string, color, x, y) {
        this.string = string;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    render(dauber) {
        dauber.text(this.string, this.color, this.x, this.y);
    }
}

class Lattice {

    constructor(width, height, x, y, cellWidth = 32, cellHeight = 32) {

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.scale = { width: cellWidth, height: cellHeight };
        this.cells = new Array(height);

        for (let i = 0; i < height; i++) {
            this.cells[i] = new Array(width);
            this.cells[i].fill(null);
        }
    }

    setCell(x, y, object) {
        this.cells[y][x] = object;
    }

    render(dauber) {
        for (i = 0; i < this.height; i++) {
            for (j = 0; j < this.width; j++) {
                if (this.cells[i][j]) {
                    dauber.image(
                        this.cells[i][j].image,
                        this.x + this.scale.width * j,
                        this.y + this.scale.height * i
                    )
                }
            }
        }
    }
}