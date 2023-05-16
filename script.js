//get container element
const container = document.getElementById("container");

// Create a loop to generate 16 rows
for (let i = 0; i < 16; i++) {
  // Create a new row element
  const row = document.createElement("div");
  row.classList.add("row"); // Optional: Add a CSS class to the row element if desired

  // Create a loop to generate 16 cells within each row
  for (let j = 0; j < 16; j++) {
    // Create a new cell element
    const cell = document.createElement("div");
    cell.classList.add("cell"); // Optional: Add a CSS class to the cell element if desired

    // Append the cell to the current row
    row.appendChild(cell);
  }

  // Append the row to the container element
  container.appendChild(row);
}

// select all cells by using the class of .cell
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  // create event listener for all cells when the mouse enters 
  // the cell
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "black";
  });
});
