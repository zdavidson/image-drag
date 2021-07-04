let draggingElement;

const onMouseDown = (event) => {
  if (event.target.classList.contains("draggable-item")) {
    draggingElement = event.target;
    console.log("mousedown", event);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
};

const onMouseMove = (event) => {
  console.log("mousemove", event);
  draggingElement.style.top = `${event.clientY}px`;
  draggingElement.style.left = `${event.clientX}px`;
};

const onMouseUp = (event) => {
  console.log("mouseup", event);
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
};

document.addEventListener("mousedown", onMouseDown);
