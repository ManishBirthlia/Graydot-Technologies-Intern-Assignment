// selecting elements for Drag-Drop
var containers = document.querySelectorAll(".container");
var images = document.querySelectorAll(".image");
var current;

for (const container of containers) {
  // adding event listener of dragover and preventing the default behaviour only for the container
  container.addEventListener("dragover", (event) => {
    let id = event.target.id;
    if (id === "Cont1" || id === "Cont2") {
      event.preventDefault();
    }
  });
  // adding event listener of drop and adding that dragged element to a new place
  container.addEventListener("drop", (event) => {
    let id = event.target.id;
    const child = document.querySelector("#" + current);
    event.target.appendChild(child);
  });
  // adding another event listener just to give hiding effect after drag
  container.addEventListener("dragleave", (event) => {
      const child = document.querySelector("#" + current);
      child.className = "hide";
    });
}

for (const image of images) {
    // adding event listener to store the element globly
    image.addEventListener("dragstart", (event) => {
        current = event.target.id;
    });
    // adding event listener to re-appeare the image
  image.addEventListener("dragend", (event) => {
    event.target.className = "image";
  });
}
