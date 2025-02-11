const container = document.querySelector(".container");

const MAX_GRID_SIZE = 960; // in pixels
let gridSquares = 16; // number of squares on one side

const square = document.createElement('div');
square.classList.add("square");

const row = document.createElement('div');
row.style.display = "flex";

function resetGrid() {
    container.textContent = "";
    row.textContent = "";
    const squareSize = Math.floor(MAX_GRID_SIZE / gridSquares);
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`;

    for (let i = 0; i < gridSquares; ++i) {
        row.appendChild(square.cloneNode());
    }
    for (let i = 0; i < gridSquares; ++i) {
        container.appendChild(row.cloneNode(true));
    }
}

const output = document.querySelector(".output");
const button = document.querySelector(".resetBtn");
button.addEventListener("click", function (event) {
    let size = Number(prompt("Enter grid length (1-100):"));

    if (!Number.isInteger(size)) {
        output.textContent = "ERROR: Input was not an integer"
    }
    else if (size <= 0 || size > 100) {
        output.textContent = "ERROR: Input was not in the range 1-100"
    }
    else {
        output.textContent = "";
        gridSquares = size;
        resetGrid();
    }
});

resetGrid();