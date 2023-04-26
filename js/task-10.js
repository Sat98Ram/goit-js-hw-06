function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");

const btnCreate = document.querySelector(`[data-create]`);

const btnDestroy = document.querySelector(`[data-destroy]`);

const input = document.querySelector("input");
let size = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = size + `px`;
    newBox.style.height = size + `px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.append(newBox);
    size += 10;
  }
}

btnCreate.addEventListener("click", () => {
  createBoxes(Number(input.value));
});

function destroyBoxes() {
  boxes.innerHTML = "";
  size = 30;
}

btnDestroy.addEventListener("click", destroyBoxes);

// const newBox = document.createElement("div");
// newBox.width = 30px;
// newBox.height = 30px;
// newBox.color = getRandomHexColor();
