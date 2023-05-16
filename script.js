// Get container element
const container = document.getElementById("mid-container");

// Define function for setGridSize
let setGridSize = () => {
  let gridSize = prompt(
    "Select the number of squares per side for the grid.",
    "Max 100"
  );

  // Clear the existing grid, otherwise it will just keep stacking grids
  container.innerHTML = "";

  if (gridSize > 100) {
    const dickhead = document.createElement("div");
    dickhead.textContent = "Dickhead, Max Size is 100 x 100.";
    dickhead.classList.add('dickhead')
    container.appendChild(dickhead);
  } else {
    // Create a loop to generate rows
    for (let i = 0; i < gridSize; i++) {
      // Create a new row element
      const row = document.createElement("div");
      row.classList.add("row");

      // Create a loop to generate cells within each row
      for (let j = 0; j < gridSize; j++) {
        // Create a new cell element
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Append the cell to the current row
        row.appendChild(cell);
      }

      // Append the row to the container element
      container.appendChild(row);
    }
  }

  // Select all cells by using the class of .cell
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    // Create event listener for all cells when the mouse enters the cell
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "black";
    });
  });
};

const gridButton = document.getElementById("set-grid");
gridButton.addEventListener("click", setGridSize);
