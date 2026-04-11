const container = document.querySelector("#container");
container.classList.add("container");

const gridButton = document.querySelector("#grid-button");

// added event listener to button
gridButton.addEventListener("click", () => {
  // prompy user for number of squares in the grid
  let gridSize = prompt("Pleae Enter a Grid Size");
  // reset container so theres no more squares
  container.innerHTML = "";
  // if user enters more than 100 we alert the user too manu squares
  if (gridSize > 100) {
    alert("Too Many Sqaures! (MAX: 100)");
  } else {
    // for loop to create the amount of squares user wants
    for (let i = 0; i < gridSize * gridSize; i++) {
      // create a div element and add it to the variable square
      const square = document.createElement("div");
      // square now has the class of "square"
      square.classList.add("square");
      // add event listener to each square for a mouse over
      square.addEventListener("mouseenter", () => {
        // if user mouses over square we set the background color to red;
        square.style.backgroundColor = "red";
      });
      // append the square we created to the container div
      container.appendChild(square);
    }
  }
});
