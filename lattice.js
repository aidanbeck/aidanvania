//A lattice is a group of tiled images, but each individual image doesn't have its own x,y,v.
//Instead, they are mapped to a resolution together, and its position is derived from its index.
//Should this be refactored so that it can be a lattice of circles, text, etc?
class Lattice {

    constructor(width, height, cellWidth = null, cellHeight = null) {

        this.width = width;
        this.height = height;
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

    render() {
        renderLattice(this);
    }
}

function renderLattice(lattice) {
    for (i = 0; i < lattice.height; i++) {
        for (j = 0; j < lattice.width; j++) {
            if (lattice.cells[i][j]) {
                DAUBER.image(
                    lattice.cells[i][j].image,
                    lattice.scale.width * j,
                    lattice.scale.height * i
                )
            }
        }
    }
}