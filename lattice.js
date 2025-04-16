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
}

function renderLattice(lattice) {
    for (i = 0; i < lattice.height; i++) {
        for (j = 0; j < lattice.width; j++) {
            if (lattice.cells[i][j]) {
                //render lattice.cells[i][j] at (lattice.scale.width*j,lattice.scale.height*i)
            }
        }
    }
}